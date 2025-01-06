import { Loader2, MessageCircle, Moon, Send, Sun } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

const ChatClient = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // WebSocket connection setup and handling
  useEffect(() => {
    const connectWebSocket = () => {
      const wsConnection = new WebSocket("ws://localhost:3000");

      wsConnection.onopen = () => {
        console.log("WebSocket connection established");
      };

      wsConnection.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "requestId") {
          setRequestId(data.requestId);
        } else if (data.type === "response") {
          setMessages((prev) => [
            ...prev,
            { text: data.message, type: "response" },
          ]);
          setIsLoading(false);
        } else if (data.type === "error") {
          setError(data.message);
          setIsLoading(false);
        }
      };

      wsConnection.onerror = () => {
        setError("WebSocket connection error");
        setIsLoading(false);
      };

      wsConnection.onclose = () => {
        console.log("WebSocket connection closed, attempting to reconnect...");
        setTimeout(connectWebSocket, 5000); // Try to reconnect after 5 seconds
      };

      setWs(wsConnection);
    };

    connectWebSocket();

    return () => {
      ws?.close();
    };
  }, []);

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);

      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_value: inputMessage, requestId }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setInputMessage(""); // Clear input after successful message submission
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDark ? "dark" : ""
      }`}
      style={{
        background: "linear-gradient(to bottom right, #eef2ff, #e0d7ff, #ffd1e6)",
      }}
    >
      <div className="w-full max-w-2xl mx-auto p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MessageCircle className="text-blue-500 w-6 h-6" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-500">
              Chat Client
            </h1>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gradient-to-r from-blue-200 to-pink-200 hover:from-blue-300 hover:to-pink-300 transition-all"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-blue-500" />
            ) : (
              <Moon className="w-6 h-6 text-pink-500" />
            )}
          </button>
        </div>

        <div
          className="h-96 overflow-y-auto mb-4 p-4 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg max-w-[80%] ${
                message.type === "user"
                  ? "ml-auto bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                  : "mr-auto bg-gradient-to-br from-pink-300 to-purple-400 text-white"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-gray-700">
              <Loader2 className="animate-spin w-5 h-5" />
              <span>Processing...</span>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 text-red-500 bg-red-100 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 p-3 bg-white/90 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ChatClient;
