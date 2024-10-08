import React, { useState } from "react";
import ContactList from "./ContactList";
import MessagingSection from "./MessagingSection";
import '../styles/MessageScreen.css'; // Import the MessageScreen CSS
import { AuthenticateToken } from "./Auth";

export default function MessageScreen() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="message-screen">
                <ContactList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <MessagingSection selectedUser={selectedUser} />
        </div>
    );
}
