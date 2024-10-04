import React, { useEffect, useState } from "react";
import api from '../api';
import '../styles/MessagingSection.css'; // Import MessagingSection CSS

export default function ChatMessages({ selectedUser }) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchMessages = async () => {
        try {
            const response = await api.get(`api/messages/conversation/${selectedUser.id}`);
            setMessages(response.data);
            console.log("Messages Data: ", response.data);
        } catch (err) {
            setError('Failed to fetch messages.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!selectedUser || !selectedUser.id) return;
        fetchMessages();
        const intervalId = setInterval(fetchMessages, 5000);
        return () => clearInterval(intervalId);
    }, [selectedUser]);

    if (!selectedUser) {
        return <p>Please select a user to view messages.</p>;
    }

    if (loading) return <p>Loading messages...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="messages-container">
            <h1>Messages with {selectedUser.name}</h1>
            <ol>
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <div key={message?.id} className={`message ${message.senderId === selectedUser.id ? 'sender' : 'receiver'}`}>
                            <p>{message?.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No messages found for this conversation.</p>
                )}
            </ol>
        </div>
    );
}
