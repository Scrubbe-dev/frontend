import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiPlus } from "react-icons/fi";

const mockMessages = [
  {
    id: 1,
    author: "Analyst 1",
    message: "How is it going",
    time: "2025-05-30 12:44:07",
    isMe: false,
  },
  {
    id: 2,
    author: "Manager",
    message: "There is an ongoing ticket we are processing now",
    time: "2025-05-30 12:44:07",
    isMe: false,
  },
  {
    id: 3,
    author: "You",
    message: "How is it going",
    time: "2025-05-30 12:44:07",
    isMe: true,
  },
  {
    id: 4,
    author: "You",
    message: "There is an ongoing ticket we are processing now",
    time: "2025-05-30 12:44:07",
    isMe: true,
  },
];

const Collaboration = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        author: "You",
        message: input,
        time: new Date().toISOString().slice(0, 19).replace("T", " "),
        isMe: true,
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 dark:bg-transparent bg-white">
        {messages.map((msg) =>
          msg.isMe ? (
            <div key={msg.id} className="flex justify-end">
              <div className="max-w-[60%] bg-yellow-50 rounded-xl px-6 py-4 mb-2">
                <div className="text-gray-800 mb-2">{msg.message}</div>
                <div className="text-gray-400 text-sm text-right">
                  {msg.time}
                </div>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex justify-start">
              <div className="max-w-[60%] bg-blue-50 rounded-xl px-6 py-4 mb-2">
                <div className="font-medium text-blue-600 mb-1">
                  {msg.author}
                </div>
                <div className="text-gray-800 mb-2">{msg.message}</div>
                <div className="text-gray-400 text-sm text-right">
                  {msg.time}
                </div>
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Bar */}
      <div className="border-t dark:bg-gray-800 bg-white px-4 py-3 flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">
          <FiPlus size={22} />
        </button>
        <input
          className="flex-1 border-none outline-none bg-transparent px-3 py-2 dark:text-white text-gray-700 placeholder-gray-400"
          placeholder="Send Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleSend}
        >
          <FiSend size={22} />
        </button>
      </div>
    </div>
  );
};

export default Collaboration;
