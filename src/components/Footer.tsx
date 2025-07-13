import { Globe } from 'lucide-react';

function Footer() {
    return (
        <footer className="text-black py-4 border-t border-gray-300">
            <div className="w-[92%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="mb-2 md:mb-0 text-center md:text-left">
                    © 2025 Sobi | All Rights Reserved
                </p>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Globe size={16} />
                    <span>English</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;