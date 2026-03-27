import { Card } from '@/components/ui/card';
import { BookOpen, FlaskConical, Palette, MonitorPlay, Calculator, Globe, GraduationCap } from 'lucide-react';

const programs = [
  {
    title: 'Primary School (Grades 1-6)',
    description: 'A strong foundational program emphasizing literacy, numeracy, and character building in a supportive environment.',
    features: ['Core Subjects (English, Maths, Science)', 'Computing', 'Our World Our People (OWOP)', 'History', 'French']
  },
  {
    title: 'Junior High School (JHS 1-3)',
    description: 'A transitional phase tailored to harness critical thinking and subject-specific knowledge preparing students for advanced studies.',
    features: ['Core Subjects (English, Maths, Science, Social Studies)', 'Computing', 'Our World Our People (OWOP)', 'History', 'French']
  }
];

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'Sciences', icon: FlaskConical, color: 'text-green-500', bg: 'bg-green-100' },
  { name: 'Languages', icon: Globe, color: 'text-purple-500', bg: 'bg-purple-100' },
  { name: 'Arts & Design', icon: Palette, color: 'text-pink-500', bg: 'bg-pink-100' },
  { name: 'Technology', icon: MonitorPlay, color: 'text-cyan-500', bg: 'bg-cyan-100' },
  { name: 'Humanities', icon: BookOpen, color: 'text-orange-500', bg: 'bg-orange-100' },
];

const Academics = () => {
  return (
    <div className="py-16 lg:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Academics</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Academic Journey</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic">
            "Education is not the filling of a pail, but the lighting of a fire."
          </p>
        </div>

        <div className="space-y-12 mb-24 max-w-5xl mx-auto">
          {programs.map((program, idx) => (
            <Card key={idx} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-slate-50/50">
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-2 relative overflow-hidden">
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
                   <div className="h-full w-full flex items-center justify-center p-12">
                      <GraduationCap className="h-20 w-20 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                   </div>
                </div>
                <div className="md:col-span-3 p-10 lg:p-14 bg-white">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{program.title}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{program.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {program.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-3 text-slate-700 font-medium">
                        <div className="h-2 w-2 bg-secondary rounded-full shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Subjects Preview */}
        <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic tracking-tight underline decoration-secondary decoration-4 underline-offset-8">Core Subject Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {subjects.map((subj, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`h-16 w-16 ${subj.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <subj.icon className={`h-8 w-8 ${subj.color}`} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{subj.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
