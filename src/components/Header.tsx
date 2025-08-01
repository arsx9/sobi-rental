import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-[var(--color-text-grey)] relative z-50 bg-transparent">
            <nav className="flex justify-between items-center w-[92%] mx-auto py-6">
                {/* Logo */}
                <Link to="/">
                    <img className="w-24 cursor-pointer" src="/assets/images/logo/logo.png" alt="logo" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-[4vw]">
                    <li className="group relative cursor-pointer">
                        <Link
                            to="/about"
                            className="inline-block text-black hover:text-[var(--color-primary)] pb-1 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full"
                        >
                            About
                        </Link>
                    </li>
                    <li className="group relative cursor-pointer">
                        <Link
                            to="/contactUs"
                            className="inline-block text-black hover:text-[var(--color-primary)] pb-1 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Call Button & Hamburger */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-6 py-1 cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition duration-300 text-sm whitespace-nowrap">
                        <i className="icon ion-ios-call"></i> 717-991-0737
                    </button>
                    {/* Hamburger Icon */}
                    <Menu
                        size={28}
                        className="md:hidden cursor-pointer text-[var(--color-primary)]"
                        onClick={() => setIsMenuOpen(true)}
                    />
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-[60] transition-transform duration-300 ease-in-out transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } rounded-l-xl`}
            >
                <div className="flex justify-between items-center mb-6">
                    <img className="w-20" src="/assets/images/logo/logo.png" alt="logo" />
                    <X
                        size={24}
                        className="text-[var(--color-primary)] cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    />
                </div>
                <ul className="flex flex-col gap-6 text-black text-small">
                    <li>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactUs" onClick={() => setIsMenuOpen(false)} className="hover:underline">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a
                            href="tel:7179910737"
                            className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-4 py-1 hover:bg-[var(--color-primary)] text-sm hover:text-white transition duration-300"
                        >
                            717-991-0737
                        </a>
                    </li>
                </ul>
            </div>

            {/* Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </header>
    );
}

export default Header;
