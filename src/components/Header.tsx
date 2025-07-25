import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Wrench, Mail, FolderOpen, Computer,  } from 'lucide-react';
import perfil from '../assets/img/perfil.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {isScrolled && (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-400">
                <img 
                  src={perfil}
                  alt="Ladislau Cumbiça Pascoal" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Ladislau Cumbiça Pascoal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <User className="w-4 h-4" />
              <span>Início</span>
            </button>
            <button
              onClick={() => scrollToSection('especialidades')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <Code className="w-4 h-4" />
              <span>Especialidades</span>
            </button>
            <button
              onClick={() => scrollToSection('ferramentas')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <Wrench className="w-4 h-4" />
              <span>Ferramentas</span>
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projectos</span>
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-1"
            >
              <Mail className="w-4 h-4" />
              <span>Contactos</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 py-2"
              >
                <User className="w-4 h-4" />
                <span>Início</span>
              </button>
              <button
                onClick={() => scrollToSection('especialidades')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 py-2"
              >
                <Code className="w-4 h-4" />
                <span>Especialidades</span>
              </button>
              <button
                onClick={() => scrollToSection('ferramentas')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 py-2"
              >
                <Wrench className="w-4 h-4" />
                <span>Ferramentas</span>
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-2 py-2"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projectos</span>
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2 w-fit"
              >
                <Mail className="w-4 h-4" />
                <span>Contactos</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;