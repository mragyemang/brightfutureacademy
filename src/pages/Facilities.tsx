import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, Laptop, Trophy, Book, Bus, Wind, ShieldCheck, Waves, GraduationCap, Palette } from 'lucide-react';
import ComputerLab from "../assets/computerLab.jpg"
import Classroom from "../assets/classroom.jpg"
import SportsComplex from "../assets/sportsComplex.jpg"
import Library from "../assets/library.jpg"
import SchoolBus from "../assets/schoolBus.jpg"
import CreativeArtsStudio from "../assets/artClass.jpg"
import GraduationPic from "../assets/graduation.jpg"

const facilities = [
  {
    title: 'Computer Labs',
    description: 'State-of-the-art laboratories equipped with modern apparatus and high-speed computing systems for practical learning.',
    icon: FlaskConical,
    image: ComputerLab
  },
  {
    title: 'Modern Classrooms',
    description: 'Spacious, well-ventilated, and digitally integrated classrooms designed to foster an engaging learning environment.',
    icon: Laptop,
    image: Classroom
  },
  {
    title: 'Sports Complex',
    description: 'Comprehensive sports facilities including a standard football pitch, basketball court, and athletics track.',
    icon: Trophy,
    image: SportsComplex
  },
  {
    title: 'Library & Resource Center',
    description: 'A vast collection of academic books, journals, and digital resources to support student research and self-study.',
    icon: Book,
    image: Library
  },
  {
    title: 'School Bus Service',
    description: 'Safe and reliable transportation network covering major routes in Sunyani and surrounding areas.',
    icon: Bus,
    image: SchoolBus
  },
  {
    title: 'Creative Arts Studio',
    description: 'Dedicated spaces for visual arts, music, and performing arts to nurture the creative talents of our students.',
    icon: Palette,
    image: CreativeArtsStudio
  }
];



const Facilities = () => {
  return (
    <div className="py-20 lg:py-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Campus</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight italic">World-Class Facilities</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            We provide an environment that inspires excellence. Our modern infrastructure 
            supports every aspect of a student's academic and personal development.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((item, index) => (
            <Card key={index} className="group border-none shadow-xl hover:-translate-y-3 transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-3 text-white">
                   <div className="h-10 w-10 bg-primary/80 backdrop-blur rounded-xl flex items-center justify-center">
                      <item.icon className="h-5 w-5" />
                   </div>
                </div>
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety & Environment */}
        <div className="mt-32 bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight italic">Safe & Serene Environment</h2>
              <p className="text-xl text-slate-50 mb-12 leading-relaxed font-medium">
                The school is situated in a quiet and secure area of Abesim, providing the 
                perfect atmosphere for concentrated study and outdoor activities.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                {[
                  { icon: ShieldCheck, text: '24/7 Security Presence' },
                  { icon: Waves, text: 'Purified Drinking Water' },
                  { icon: Wind, text: 'Eco-friendly Campus' },
                  { icon: GraduationCap, text: 'Serene Study Zones' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="font-bold text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] rotate-3 -z-10" />
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img 
                   src={GraduationPic} 
                   alt="Campus Environment" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
