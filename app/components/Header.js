"use client"; // Marca como Client Component

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Sugestão: Use ícones como o 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Nome */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
          CLENYLDA
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition duration-300">
              {link.label}
            </Link>
          ))}
          
          {/* Botão de Ação do Header */}
          <Link href="#contato" className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Fale Comigo
          </Link>
        </nav>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-50 border-t border-gray-200`}>
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Fecha ao clicar no link
              className="block py-2 px-3 text-gray-700 hover:bg-blue-100 rounded-lg transition duration-300"
            >
              {link.label}
            </Link>
          ))}
           <Link 
              href="#contato" 
              onClick={() => setIsOpen(false)}
              className="block mt-4 py-2 px-4 bg-blue-600 text-white text-center rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Fale Comigo
            </Link>
        </nav>
      </div>
    </header>
  );
}