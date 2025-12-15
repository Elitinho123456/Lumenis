import { useState } from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

// Criamos um sub-componente para o Link para o código ficar limpo
const NavLink = ({ href, children, onClick }: NavLinkProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="group relative py-1 text-gray-700 hover:text-black transition-colors duration-300"
        >
            {children}
            {/* Esta é a linha animada */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </a>
    );
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id="inicio" className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-all">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-3xl font-bold tracking-widest text-gray-900 cursor-pointer select-none">
                    LUMENIS
                </h1>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex space-x-8 font-medium">
                    <NavLink href="#portfolio">Portfólio</NavLink>
                    <NavLink href="#sobre">Sobre Nós</NavLink>
                    <NavLink href="#precos">Orçamentos</NavLink>
                    <NavLink href="#duvidas">Dúvidas & Reserva</NavLink>
                </nav>

                {/* Botão Mobile */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menu Mobile */}
            <div
                className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}
            >
                <div className="flex flex-col px-6 pb-6 pt-2 space-y-2">
                    <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-yellow-600 font-medium border-b border-gray-50">Portfólio</a>
                    <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-yellow-600 font-medium border-b border-gray-50">Sobre Nós</a>
                    <a href="#precos" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-yellow-600 font-medium border-b border-gray-50">Orçamentos</a>
                    <a href="#duvidas" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-yellow-600 font-medium">Dúvidas & Reserva</a>
                </div>
            </div>
        </header>
    )
}