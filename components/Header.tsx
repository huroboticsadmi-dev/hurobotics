import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = currentPage !== 'home' || scrolled || isMenuVisible;
  const hasSubmenus = NAV_LINKS.some(link => link.children && link.children.length > 0);

  const darkLogo = "https://i.postimg.cc/MpCPzjY4/hyuaenlobotigseu-kkamang-galo.png";
  const whiteLogo = "https://i.postimg.cc/t4QWTdLv/hyuaenlobotigseu-hayang-galo.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50`}
      onMouseLeave={() => setIsMenuVisible(false)}
    >
      <div className={`relative transition-all duration-300 ${isSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-20">
            <div className="flex-shrink-0 justify-self-start">
              <button onClick={() => onNavigate('home')} aria-label="HuRobotics Homepage">
                <img 
                  src={isSolid ? darkLogo : whiteLogo} 
                  alt="HuRobotics Logo"
                  className={`h-12 w-auto transition-all duration-300`}
                />
              </button>
            </div>
            
            <nav 
              className="hidden md:flex items-center justify-self-center h-full"
              onMouseEnter={() => hasSubmenus && setIsMenuVisible(true)}
            >
              <div className="flex items-center space-x-2 h-full">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="h-full flex items-center group relative">
                    <button
                      onClick={() => link.pageId && onNavigate(link.pageId)}
                      className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 flex items-center cursor-pointer ${
                        isSolid
                          ? 'text-slate-700 hover:text-blue-800'
                          : 'text-white hover:text-slate-200'
                      }`}
                    >
                      <span>{link.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </nav>

            {/* Empty div for grid balance, KOR text removed */}
            <div className="justify-self-end"></div>
          </div>
        </div>

        {/* Mega Menu Panel */}
        <div
          className={`absolute top-full left-0 w-full bg-blue-900 bg-opacity-95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
          }`}
          aria-hidden={!isMenuVisible}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-center">
              <div className="flex flex-row gap-x-16 lg:gap-x-24">
                {NAV_LINKS.map(link => (
                  link.children && link.children.length > 0 && (
                    <div key={link.name}>
                      <h3 className="text-lg font-bold text-white mb-6">{link.name}</h3>
                      <ul className="space-y-4">
                        {link.children.map(childLink => (
                          <li key={childLink.name}>
                            <button
                              onClick={() => {
                                if (link.pageId) onNavigate(link.pageId);
                                setIsMenuVisible(false);
                              }}
                              className="block text-slate-300 hover:text-white font-medium transition-colors duration-200"
                            >
                              {childLink.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;