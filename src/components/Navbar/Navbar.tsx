import { useState, useEffect } from 'react';
import {
  Menu,
  PhoneCall,
  X,
} from 'lucide-react';
import LOGOSvg from '../SVGs/LOGOSvg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'خدمات سئو', href: '#seo-services' },
    { label: 'قابلیت‌ها و مهارت‌ها', href: '#skills' },
    { label: 'درایوهای نمونه‌کار', href: '#drives' },
    { label: 'سابقه و گیت‌هاب', href: '#experience' },
    { label: 'پروژه‌ها', href: '#projects' },
    { label: 'گواهینامه‌ها', href: '#certificates'},
    { label: 'تماس', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
        ? 'bg-card/90 backdrop-blur-md shadow-sm border-b border-border py-3'
        : 'bg-card/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full justify-between">
          
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8">
              <LOGOSvg className='text-[#d1c6b6] hover:text-[#d1c6b6]/90' />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[10px] sm:text-xs bg-secondary px-2.5 py-1 rounded-lg text-secondary-foreground">
                SEO EXPERT
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
                id="header-contact-cta"
                href="tel:00989050338672"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-md bg-primary text-primary-foreground hover:opacity-95 shadow-xs transition-all hover:translate-y-[-1px]"
            >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>تماس</span>
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=" p-2 rounded-2xl border border-border bg-card text-foreground hover:bg-secondary/50 transition-colors"
              aria-label="منوی موبایل"
            >
            
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="mt-3 p-4 rounded-xl border border-border bg-card shadow-lg flex flex-col gap-1 transition-all"
          >
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-secondary/40 font-medium transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar
