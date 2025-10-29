import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/50da0a6e085c4cb1e2e8c3927694c2e28575c494.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'בית' },
    { id: 'about', label: 'אודות' },
    { id: 'departments', label: 'מחלקות' },
    { id: 'gallery', label: 'גלריה' },
    { id: 'contact', label: 'צור קשר' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b-2" style={{ borderColor: '#FF8C00' }} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md transition-colors text-white ${currentPage === item.id
                  ? ''
                  : 'hover:bg-white/10'
                  }`}
                style={currentPage === item.id ? { backgroundColor: '#FF8C00' } : {}}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Logo - Left Side */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="ערמוש האני - לוגו החברה" className="h-24 w-auto" />
          </button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              backgroundColor: mobileMenuOpen ? 'rgba(255, 140, 0, 0.2)' : 'transparent'
            }}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md text-right transition-colors text-white ${currentPage === item.id
                    ? ''
                    : 'hover:bg-white/10'
                    }`}
                  style={currentPage === item.id ? { backgroundColor: '#FF8C00' } : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
