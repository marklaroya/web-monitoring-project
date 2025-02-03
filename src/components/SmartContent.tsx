import React, { useState } from 'react';
import './SmartContent.css';

interface User {
    name: string;
    mobileNumber: string;
    dataBalance: number;
}

const mockData: User[] = [
    { name: 'John Doe', mobileNumber: '09171234567', dataBalance: 1024 },
    { name: 'Jane Smith', mobileNumber: '09179876543', dataBalance: 512 },
    { name: 'Alice Johnson', mobileNumber: '09171239876', dataBalance: 256 },
];

const SmartContent: React.FC = () => {
    const [users, setUsers] = useState<User[]>(mockData);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<User>({ name: '', mobileNumber: '', dataBalance: 0 });

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.mobileNumber.includes(searchQuery)
    );

    const handleDelete = (index: number) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    const handleEdit = (index: number) => {
        setCurrentUser(users[index]);
        setIsEditing(true);
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', mobileNumber: '', dataBalance: 0 });
        setIsEditing(false);
    };

    const handleSaveEdit = () => {
        if (currentUser) {
            const updatedUsers = users.map(user =>
                user.mobileNumber === currentUser.mobileNumber ? currentUser : user
            );
            setUsers(updatedUsers);
            setIsEditing(false);
            setCurrentUser(null);
        }
    };

    return (
        <div className="smart-content">
            <div className="header">
                <h3>SMART Data Balance</h3>
                <div className="actions">
                    <input
                        type="text"
                        placeholder="Search...."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button className="add-user-button" onClick={() => { setIsEditing(true); setCurrentUser(null); }}>Add User</button>
                </div>
            </div>
            <div className="user-cards">
                {filteredUsers.map((user, index) => (
                    <div className="user-card" key={index}>
                        <h4>{user.name}</h4>
                        <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
                        <p><strong>Remaining Data:</strong> {user.dataBalance} MB</p>
                        <div className="user-actions">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {isEditing && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{currentUser ? 'Edit User' : 'Add User'}</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            value={currentUser ? currentUser.name : newUser.name}
                            onChange={(e) => {
                                if (currentUser) {
                                    setCurrentUser({ ...currentUser, name: e.target.value });
                                } else {
                                    setNewUser({ ...newUser, name: e.target.value });
                                }
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={currentUser ? currentUser.mobileNumber : newUser.mobileNumber}
                            onChange={(e) => {
                                if (currentUser) {
                                    setCurrentUser({ ...currentUser, mobileNumber: e.target.value });
                                } else {
                                    setNewUser({ ...newUser, mobileNumber: e.target.value });
                                }
                            }}
                        />
                        <input
                            type="number"
                            placeholder="Data Balance"
                            value={currentUser ? currentUser.dataBalance : newUser.dataBalance}
                            onChange={(e) => {
                                if (currentUser) {
                                    setCurrentUser({ ...currentUser, dataBalance: Number(e.target.value) });
                                } else {
                                    setNewUser({ ...newUser, dataBalance: Number(e.target.value) });
                                }
                            }}
                        />
                        <button onClick={currentUser ? handleSaveEdit : handleAddUser}>
                            {currentUser ? 'Save' : 'Add'}
                        </button>
                        <button className="close-button" onClick={() => setIsEditing(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SmartContent;