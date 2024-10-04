import React, { useEffect, useState } from 'react';
import api from '../api'; // Import your axios instance with the interceptor
import '../styles/ContactList.css'; // Import ContactList CSS

export default function ContactList({ selectedUser, setSelectedUser }) {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.post('chatv1/user/all');  
                setUsers(response.data);  
                console.log("Users Data: ", response.data);

                if (response.data.length > 0 && !selectedUser) {
                    setSelectedUser(response.data[0]);
                }
            } catch (err) {
                setError('Failed to fetch users.');
                console.error('Error:', err);
            } finally {
                setLoading(false);  
            }
        };

        fetchUsers();  
    }, []);  

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="contact-list">
            <h1>Messaging Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => setSelectedUser(user)}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}
