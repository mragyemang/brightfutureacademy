import { Card } from '@/components/ui/card';
import Principal from "../assets/principal.jpg"
import HeadofAdmin from "../assets/headofadmin.jpg"
import AcademicHistory from "../assets/AcademicHistory.jpg"
import ElonMusk from "../assets/ElonMusk.jpg"
import MarkZuckerberg from "../assets/MarkZuckerberg.webp"

const teachers = [
  { name: 'Dr. Prince Agyemang', role: 'Principal', image: Principal },
  { name: 'Ing Clinton Amofa', role: 'Head of Administration', image: HeadofAdmin },
  { name: 'Dr. Elon Musk', role: 'Head of Junior High School', image: ElonMusk },
  { name: 'Mark Zuckerberg', role: 'Head of Primary School', image: MarkZuckerberg },
];

const About = () => {
  return (
    <div className="py-20 lg:py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Legacy</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight italic">Nurturing Brilliance</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since 2000, Bright Future Academy has been a cornerstone of academic excellence 
            and character building, shaping the leaders of tomorrow.
          </p>
        </div>

        {/* History & Mission */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-2 -z-10" />
             <div className="bg-slate-100 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={AcademicHistory} 
                  alt="Academy History" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-slate-50">
               <p className="text-4xl font-extrabold text-primary mb-1 italic">26</p>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center">
              <span className="w-12 h-1 bg-secondary mr-4" />
              Our Story
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Bright Future Academy started with a vision to provide quality, accessible education. What began as a small primary school has grown into a comprehensive educational institution covering Primary through Junior High School.
            </p>
            <div className="grid gap-8">
              <div className="group">
                <h3 className="text-xl font-bold text-primary mb-3 transition-colors group-hover:text-blue-600">The Mission</h3>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6">
                  "To empower students with the knowledge, skills, and values needed to succeed in a rapidly changing world, fostering critical thinking and creativity."
                </p>
              </div>
              <div className="group">
                <h3 className="text-xl font-bold text-primary mb-3 transition-colors group-hover:text-blue-600">The Vision</h3>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6">
                  "To be the premier educational institution in the region, recognized for producing well-rounded global citizens who are prepared to make a positive impact."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <section className="bg-slate-50 rounded-[4rem] p-12 lg:p-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight italic">Our Leadership Team</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teachers.map((teacher, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-none bg-transparent hover:-translate-y-3 transition-all duration-500">
                <div className="aspect-[3/4] relative overflow-hidden rounded-[2.5rem] shadow-xl">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-bold text-lg">{teacher.name}</p>
                    <p className="text-secondary text-sm font-medium">{teacher.role}</p>
                  </div>
                </div>
                <div className="mt-8 text-center group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-bold text-xl text-slate-900">{teacher.name}</h3>
                  <p className="text-slate-500 font-semibold text-sm mt-1 uppercase tracking-widest">{teacher.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
