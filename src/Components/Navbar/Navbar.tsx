import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo clicável para redirecionar */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors">
                LexTech
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/produtos"
              className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Nossos Produtos
            </Link>
            <Link
              to="/solucoes"
              className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Como Podemos Ajudar
            </Link>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Conheça a LexTech
            </Link>
            <Link
              to="/contato"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 shadow-md transition-all transform hover:scale-105"
            >
              Fale com a Gente
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6 bg-white shadow-lg rounded-md">
            <Link
              to="/produtos"
              className="block text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Nossos Produtos
            </Link>
            <Link
              to="/solucoes"
              className="block text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Como Podemos Ajudar
            </Link>
            <Link
              to="/sobre"
              className="block text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Conheça a LexTech
            </Link>
            <Link
              to="/contato"
              className="block bg-indigo-600 text-white px-4 py-2 rounded-full text-base font-medium shadow-md hover:bg-indigo-500 transition-all transform hover:scale-105"
            >
              Fale com a Gente
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
