import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useChatStore } from "../store/useChatStore";

export default function Chatbot() {
  const {
    chatbotOpen,
    setChatbotOpen,
    messages,
    addMessage,
    resetMessages,
    seconds,
    startTimer,
    stopTimer,
    resetTimer,
  } = useChatStore();

  const [input, setInput] = useState("");

  const openChat = () => {
    setChatbotOpen(true);
    resetTimer();
    startTimer();
  };

  const closeChat = () => {
    stopTimer();
    setChatbotOpen(false);
  };

  const resetChat = () => {
    resetMessages();
    resetTimer();
    startTimer();
  };

  const send = () => {
    if (!input.trim()) return;

    addMessage({ from: "user", text: input });
    setInput("");

    setTimeout(() => {
      addMessage({ from: "bot", text: "Thanks for your message! (Demo bot)" });
    }, 700);
  };

  return (
    <>
      {/* Floating Button */}
      {!chatbotOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {chatbotOpen && (
        <div
          className="
            fixed bottom-0 right-0 left-0 top-0
            sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto

            w-full h-full sm:w-[400px] sm:h-[600px]

            bg-white rounded-none sm:rounded-xl
            shadow-none sm:shadow-2xl
            flex flex-col border z-50
          "
        >
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-gray-100 rounded-t-xl">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold">Chatbot</h2>
              <span className="text-sm text-gray-600">{seconds}s elapsed</span>
            </div>

            <div className="flex gap-3">
              <button onClick={resetChat} className="text-blue-600">
                Reset
              </button>
              <button onClick={closeChat}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-gray-300 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2 bg-white rounded-b-xl">
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button
              onClick={send}
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
