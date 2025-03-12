import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src="/vercel.svg" alt="Logo" className="h-8 w-8" />
                    <span className="font-bold text-xl">Admin Panel</span>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/users" className="hover:text-gray-300">Users</Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:text-gray-300">Products</Link>
                    </li>
                    <li>
                        <Link href="/categories" className="hover:text-gray-300">Categories</Link>
                    </li>
                    <li>
                        <Link href="/orders" className="hover:text-gray-300">Orders</Link>
                    </li>
                    <li>
                        <Link href="/reviews" className="hover:text-gray-300">Reviews</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}