import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, CalendarCheck, HelpCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '1. Submit Application',
    description: 'Complete the online application form with the required details and academic history.'
  },
  {
    icon: CalendarCheck,
    title: '2. Entrance Assessment',
    description: 'Schedule and take our standard entrance assessment to determine the appropriate placement.'
  },
  {
    icon: HelpCircle,
    title: '3. Interview',
    description: 'A brief interview with the student and parents to align on educational goals.'
  },
  {
    icon: CheckCircle2,
    title: '4. Enrollment',
    description: 'Upon acceptance, submit the required documentation and enrollment fees.'
  }
];

const requirements = [
  'Completed Application Form',
  'Birth Certificate or Passport copy',
  'Previous Academic Transcripts (last 2 years)',
  'Two recent passport-sized photographs',
  'Medical History Form',
  'Recommendation Letter (for SHS applicants)'
];

const Admissions = () => {
  return (
    <div className="py-16 lg:py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Admissions</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight italic">Secure Your Future</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Joining Bright Future Academy is the first step toward a transformative educational experience. 
            We welcome students who are curious, creative, and ready to lead.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Content - Process & Requirements */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center">
                <span className="bg-primary text-white h-10 w-10 rounded-xl flex items-center justify-center mr-4 text-xl">1</span>
                The Admission Journey
              </h2>
              <div className="relative space-y-8 before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200 before:h-full before:-z-10">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-white border-4 border-slate-50 text-primary rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
                        <step.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar - Requirements & CTA */}
          <div className="space-y-10 sticky top-32">
            <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-10">
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-10 w-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                     <FileText className="h-5 w-5 text-secondary-foreground" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">Requirements</h3>
                </div>
                <ul className="space-y-5">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700">
                      <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white shadow-2xl border-none rounded-[2.5rem] overflow-hidden text-center">
              <CardContent className="p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to Apply?</h3>
                <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                  Start your application today and begin the journey toward excellence.
                </p>
                <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold h-14 rounded-full text-lg shadow-xl shadow-black/20 transition-all hover:scale-105 active:scale-95">
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
