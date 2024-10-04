import React, { useState } from "react";
import ContactList from "./ContactList";
import MessagingSection from "./MessagingSection";
import '../styles/MessageScreen.css'; // Import the MessageScreen CSS

export default function MessageScreen() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="message-screen">
            <div className="contact-list">
                <ContactList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </div>
            <div className="messaging-section">
                <MessagingSection selectedUser={selectedUser} />
            </div>
        </div>
    );
}
