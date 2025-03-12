import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <div className="bg-white shadow rounded p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <Link href={`/users/${user.id}`}>
                <span className="text-blue-500 hover:underline cursor-pointer">
                    Edit
                </span>
            </Link>
        </div>
    )
}