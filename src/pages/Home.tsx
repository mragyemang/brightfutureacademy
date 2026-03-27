import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Trophy, ArrowRight, ChevronRight } from 'lucide-react';
import SchoolCompound from "../assets/schoolCompound.jpg"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-40 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] transform translate-x-20" />
        <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold mb-8 animate-in fade-in slide-in-from-left duration-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Admissions 2026/2027 Now Open</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom duration-700">
                Igniting <span className="text-primary italic">Minds</span>,<br />
                <span className="relative inline-block mt-2">
                  Shaping <span className="text-blue-600">Futures</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-secondary rounded-full transform -rotate-1" />
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom delay-200 duration-700">
                Experience a world-class education where academic excellence meets 
                holistic development. We prepare your child for global leadership 
                and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 animate-in fade-in slide-in-from-bottom delay-300 duration-700">
                <Button asChild size="lg" className="h-14 px-10 text-base font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  <Link to="/admissions" className="flex items-center">Apply Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-14 px-10 text-base font-semibold group hover:bg-slate-100 rounded-full">
                  <Link to="/about" className="flex items-center">
                    Learn More 
                    <span className="ml-2 h-8 w-8 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-sm">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] -rotate-3 -z-10" />
              <div className="bg-slate-200 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src={SchoolCompound} 
                  alt="Bright Future Academy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-8 left-8 right-8 text-white md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-bold text-xl mb-1">Empowering the next generation</p>
                  <p className="text-slate-200 text-sm">Join our diverse community of learners and leaders.</p>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-3 rounded-xl">
                    <Trophy className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 line-none">98%</p>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Academy Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">Built for Excellence</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide a balanced educational experience that nurtures academic brilliance, 
              social responsibility, and personal growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { 
                title: "Curriculum of Excellence", 
                icon: BookOpen, 
                desc: "Our dual-curriculum approach combines local standards with international best practices.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Inspirational Faculty", 
                icon: Users, 
                desc: "Passionate educators dedicated to mentoring and guiding every student's journey.",
                color: "bg-amber-50 text-amber-600"
              },
              { 
                title: "Holistic Achievement", 
                icon: Trophy, 
                desc: "Focusing on sports, arts, and technology alongside core academic subjects.",
                color: "bg-emerald-50 text-emerald-600"
              }
            ].map((item, i) => (
              <Card key={i} className="group border-none shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] overflow-hidden">
                <CardHeader className="p-10 pb-0">
                  <div className={`h-16 w-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 border border-current/10 transition-transform group-hover:rotate-12`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-10">
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent" />
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Your child's bright future starts here.</h2>
               <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                 Join a community that celebrates diversity, fosters innovation, and inspires excellence in every child.
               </p>
               <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold h-14 px-12 rounded-full text-lg shadow-xl shadow-black/20">
                 <Link to="/contact">Schedule a Visit</Link>
               </Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
