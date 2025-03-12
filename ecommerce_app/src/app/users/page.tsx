'use client';

import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}