import React from 'react';
import ChatMessages from './ChatMessages';
import SendMessage from './SendMessage';
import '../styles/MessagingSection.css'; // Import MessagingSection CSS

export default function MessagingSection({ selectedUser }) {
    return (
        <div className="messaging-section">
            <ChatMessages selectedUser={selectedUser} />
            <SendMessage selectedUser={selectedUser} />
        </div>
    );
}
