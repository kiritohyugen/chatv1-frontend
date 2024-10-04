import React, { useState } from "react";
import { sendMessage } from "../api";
import '../styles/SendMessage.css'; // Import SendMessage CSS

export default function SendMessage({ selectedUser }) {
    const [message, setMessage] = useState('');
    const [pending, setPending] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return; // Don't send empty messages
        setPending(true);

        try {
            await sendMessage({ recipientId: selectedUser.id, content: message });
            setMessage('');
        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            setPending(false);
        }
    };

    return (
        <form className="send-message-form" onSubmit={handleSendMessage}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={pending}
            />
            <button type="submit" disabled={pending}>
                Send
            </button>
        </form>
    );
}
