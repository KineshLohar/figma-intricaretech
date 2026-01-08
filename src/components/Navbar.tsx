import { Link } from "react-router-dom";
import { ChevronDown, LogIn } from "lucide-react";

const routes = [
    {
        id: 1,
        title: 'Product',
        subRoutes: [
            { id: 1, title: 'Product 1', url: '/product1' },
            { id: 2, title: 'Product 2', url: '/product2' },
        ],
    },
    {
        id: 2,
        title: 'Pricing',
        url: '/pricing',
    },
    {
        id: 3,
        title: 'Resources',
        subRoutes: [
            { id: 1, title: 'Resources 1', url: '/resource1' },
            { id: 2, title: 'Resources 2', url: '/resource2' },
        ],
    },
    {
        id: 4,
        title: 'Company',
        subRoutes: [
            { id: 1, title: 'Company 1', url: '/company1' },
            { id: 2, title: 'Company 2', url: '/company2' },
        ],
    },
];


export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="logo" className="h-9" />
                </Link>

                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    {routes.map((route) => {
                        const isDropdown = route.subRoutes?.length;

                        if (!isDropdown && route.url) {
                            return (
                                <li key={route.id}>
                                    <Link
                                        to={route.url}
                                        className="hover:text-blue-600 transition"
                                    >
                                        {route.title}
                                    </Link>
                                </li>
                            );
                        }

                        if (route.subRoutes?.length) {
                            return (
                                <li key={route.id} className="relative group">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                                        {route.title}
                                        <ChevronDown size={18} className="" />
                                    </div>

                                    {/* Dropdown */}
                                    <div className="absolute top-full left-0 mt-3 w-48 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <ul className="py-2">
                                            {route.subRoutes.map((sub) => (
                                                <li key={sub.id}>
                                                    <Link
                                                        to={sub.url}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        }
                    })}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-cyan-600/90 rounded-md hover:bg-blue-700 transition">
                        Get Your Free Account
                    </button>

                    <button className="flex items-center gap-2 text-sm font-medium border border-cyan-600 text-cyan-600 rounded-lg px-4 py-2 hover:text-blue-600 transition">
                        <LogIn size={18} /> Login
                    </button>
                </div>
            </div>
        </nav>
    );
};
