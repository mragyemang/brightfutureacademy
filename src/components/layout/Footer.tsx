import { Link } from 'react-router-dom';
import { GraduationCap, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-primary p-2.5 rounded-2xl shadow-lg shadow-primary/20">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl leading-none tracking-tight italic">Bright Future</h2>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1.5">Academy</p>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
              "Nurturing brilliance, shaping futures, and empowering the next generation of global leaders since 2000."
            </p>
            <div className="flex space-x-5">
              {[
                { icon: FacebookIcon, label: 'Facebook' },
                { icon: TwitterIcon, label: 'Twitter' },
                { icon: InstagramIcon, label: 'Instagram' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-12 w-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-10 text-white italic flex items-center">
              <span className="w-8 h-px bg-secondary mr-4" />
              Navigate
            </h3>
            <ul className="space-y-5">
              {['Home', 'About', 'Academics', 'Admissions', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 font-bold hover:text-secondary transition-colors text-lg flex items-center group">
                    <span className="h-1.5 w-1.5 bg-slate-700 rounded-full mr-3 group-hover:bg-secondary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-10 text-white italic flex items-center">
              <span className="w-8 h-px bg-secondary mr-4" />
              Reach Out
            </h3>
            <ul className="space-y-8">
              <li className="flex items-start space-x-5 group">
                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-colors">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Visit Us</p>
                   <p className="text-slate-300 font-bold">Nkwabeng<br/>Sunyani, Ghana</p>
                </div>
              </li>
              <li className="flex items-start space-x-5 group">
                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                   <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Call Us</p>
                   <p className="text-slate-300 font-bold">+233 20 801 2645</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/40 transition-colors" />
            <h3 className="text-2xl font-black text-white italic mb-6 leading-tight">Join Our Community</h3>
            <p className="text-slate-400 font-medium mb-8">Get the latest updates from the portal delivered to your mailbox.</p>
            <div className="space-y-4">
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="w-full h-14 bg-white/10 border-none rounded-2xl px-6 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary outline-none" 
               />
               <Button className="w-full h-14 rounded-2xl font-bold shadow-xl shadow-black/20 hover:scale-[1.02] transition-all">Subscribe</Button>
               <Link to="/admin" className="block text-center text-slate-700 hover:text-slate-400 transition-colors text-xs font-bold pt-4">Internal Access Port</Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-bold text-sm tracking-widest">
            &copy; {new Date().getFullYear()} BRIGHT FUTURE ACADEMY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-8">
             <a href="#" className="text-slate-500 hover:text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors">Privacy Policy</a>
             <a href="#" className="text-slate-500 hover:text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
