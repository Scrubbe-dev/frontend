import React, { useCallback, useState } from "react";
import PlaybookTemplates from "./PlaybookTemplates";
import PlaybookCanvas from "./PlaybookCanvas";
import PlaybookControls from "./PlaybookControls";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
} from "reactflow";
import PlaybookActions from "./PlaybookActions";
import usePlaybookBuilderStore from "@/store/slices/playbookBuilder";
import SideModal from "@/components/ui/SideModal";
import PlaybookComment from "./PlaybookComment";
const TEMPLATES = [
  {
    title: "Unauthorized Access",
    desc: "Respond to unauthorized access attempts with severity-based actions.",
  },
  {
    title: "Failed Login",
    desc: "Block IPs and notify admins after repeated failed logins.",
  },
  {
    title: "Phishing Response",
    desc: "Quarantine phishing emails and notify security team.",
  },
];

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const PlaybookBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [actionId, setActionId] = useState(1);
  const { playbookActions } = usePlaybookBuilderStore();
  const [isOpenComment, setIsOpenComment] = useState(false);
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const action = event.dataTransfer.getData("action");
      const position = { x: event.clientX - 400, y: event.clientY - 150 };
      setNodes((nds) => [
        ...nds,
        {
          id: `action-${actionId}`,
          type: "default",
          position,
          data: { label: action },
        },
      ]);
      setActionId((id) => id + 1);
    },
    [actionId, setNodes]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleClear = () => {
    setNodes([]);
    setEdges([]);
  };

  const handleSave = () => {
    console.log("Playbook saved:", { nodes, edges });
    alert("Playbook saved! (see console)");
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Playbook Builder
        </h2>
      </div>
      <div className="p-6 dark:bg-dark bg-white rounded-xl shadow w-full mx-auto flex flex-col gap-4">
        <div>
          <p className="text-lg font-bold dark:text-white">Build a Playbook</p>
          <p className="text-gray-500 dark:text-gray-400">
            Drag and drop actions to create a security playbook. Use conditions
            for branching workflow
          </p>
        </div>
        <div className="flex gap-4 border-b dark:border-gray-700 border-gray-100">
          <div
            className={` px-4 py-2 border-b-2 dark:border-colorScBlue text-colorScBlue`}
          >
            Canvas
          </div>

          <div
            className=" px-4 py-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() => setIsOpenComment(true)}
          >
            Comment
          </div>
          <div className=" px-4 py-2 text-gray-500 dark:text-gray-400 cursor-pointer">
            History
          </div>
        </div>
        <PlaybookTemplates templates={TEMPLATES} />
        <PlaybookActions actions={playbookActions} />
        <PlaybookCanvas
          nodes={nodes}
          edges={edges}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        />
        <PlaybookControls onClear={handleClear} onSave={handleSave} />
      </div>

      {isOpenComment && (
        <SideModal
          isOpen={isOpenComment}
          onClose={() => setIsOpenComment(false)}
          title="Comment"
        >
          <PlaybookComment />
        </SideModal>
      )}
    </div>
  );
};

export default PlaybookBuilder;
