import logo from '../assets/images/logo/logo.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'
function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <header className='border border-[var(--color-text-grey)]'>
            <nav className="flex justify-between items-center w-[92%] mx-auto py-6">
                <div>
                    <img className="w-24 cursor-pointer" src={logo} alt="logo" />
                </div>
                <div className={`md:static absolute bg-white md:bg-transparent md:min-h-fit min-h-[30vh] left-0 w-full md:w-auto flex items-center px-5 transition-[top,opacity] duration-300 ease-in-out ${isMenuOpen ? 'top-[10%] opacity-100' : 'top-[-100%] opacity-0'} md:top-auto md:opacity-100`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                        <li className="group relative cursor-pointer">
                            <a href="#" className="inline-block text-black hover:text-[var(--color-primary)] pb-1 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full">
                                About
                            </a>
                        </li>
                        <li className="group relative cursor-pointer">
                            <a href="#" className="inline-block text-black hover:text-[var(--color-primary)] pb-1 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>
                    <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full px-6 py-1 cursor-pointer hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300"><i className="icon ion-ios-call"></i>717-991-0737</button>
                    {isMenuOpen ? (
  <X className='md:hidden cursor-pointer' size={28} onClick={() => setIsMenuOpen(false)} />
) : (
  <Menu className='md:hidden cursor-pointer' size={28} onClick={() => setIsMenuOpen(true)} />
)}
                </div>
            </nav>
        </header>
    );
}
export default Header;