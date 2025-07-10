import React from "react";

type Template = {
  title: string;
  desc: string;
};

type PlaybookTemplatesProps = {
  templates: Template[];
};

const PlaybookTemplates: React.FC<PlaybookTemplatesProps> = ({ templates }) => (
  <div className="flex flex-col gap-2">
    <p className="text-lg font-bold dark:text-white">Templates</p>
    <div className="flex gap-4 mb-6">
      {templates.map((tpl) => (
        <div
          key={tpl.title}
          className="border rounded-lg p-4 w-64 dark:bg-subDark bg-gray-50 flex flex-col justify-between"
        >
          <div>
            <div className="font-semibold mb-2 dark:text-white">
              {tpl.title}
            </div>
            <div className="text-sm mb-4 dark:text-white">{tpl.desc}</div>
          </div>
          <button
            className="bg-blue-500 text-white rounded px-3 py-1"
            onClick={() => alert(`Load template: ${tpl.title}`)}
          >
            Load
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default PlaybookTemplates;
