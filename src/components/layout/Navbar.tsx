import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/50 transition-all duration-500">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Brand Identity */}
        <Link to="/" className="flex items-center space-x-3 group transition-all duration-500">
          <div className="bg-primary p-2.5 rounded-[1.25rem] shadow-xl shadow-primary/20 transition-all group-hover:rotate-12 duration-500 group-hover:scale-110">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl leading-none text-slate-900 tracking-tight italic group-hover:text-primary transition-colors">Bright Future</span>
            <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase mt-1 transition-colors">Academy</span>
          </div>
        </Link>
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all relative py-2 uppercase tracking-widest group ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-slate-500 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 pl-10 border-l border-slate-100">
              <Link
                to="/admissions"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-primary px-10 text-sm font-black text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-slate-900 hover:scale-[1.05] active:scale-95 italic tracking-tight"
              >
                Apply for Entry
              </Link>
            </div>
          </div>
        <button
          className="lg:hidden h-12 w-12 flex items-center justify-center text-slate-900 hover:bg-slate-50 rounded-2xl transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur-2xl animate-in slide-in-from-top duration-500 border-slate-50 overflow-hidden rounded-b-[3rem] shadow-2xl">
          <div className="container mx-auto px-6 py-10 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-extrabold italic py-4 px-6 rounded-2xl transition-all flex items-center justify-between group ${
                  isActive(link.path) 
                    ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20' 
                    : 'text-slate-900 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ChevronRight className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${isActive(link.path) ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            ))}
            <div className="pt-8 mt-4 border-t border-slate-50">
               <Link
                to="/admissions"
                className="flex h-20 w-full items-center justify-center rounded-[1.5rem] bg-slate-900 px-8 text-xl font-black text-white shadow-2xl transition-all hover:bg-primary active:scale-[0.98] italic"
                onClick={() => setIsOpen(false)}
              >
                Apply Now <ChevronRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
