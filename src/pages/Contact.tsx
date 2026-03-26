import { useState, type FormEvent } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="py-20 lg:py-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Connect</div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight italic">Let's Dialogue</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're an prospective parent, a student, or a community member, 
            we're here to answer your questions and welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Form */}
          <Card className="shadow-2xl border-none rounded-[3rem] overflow-hidden bg-white">
            <CardContent className="p-10 lg:p-14">
              <h2 className="text-3xl font-bold mb-10 text-slate-900">Send us a Message</h2>
              {submitted ? (
                <div className="bg-emerald-50 text-emerald-700 p-8 rounded-3xl text-center py-20 animate-in zoom-in duration-500">
                  <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-extrabold text-2xl mb-4">Message Received!</h3>
                  <p className="text-lg">Thank you for reaching out. Our admissions team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <Input id="name" required placeholder="John Doe" className="h-14 rounded-xl bg-slate-50 border-none focus-visible:ring-primary/20" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-14 rounded-xl bg-slate-50 border-none focus-visible:ring-primary/20" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                    <Input id="subject" required placeholder="Admission Inquiry" className="h-14 rounded-xl bg-slate-50 border-none focus-visible:ring-primary/20" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-slate-500 uppercase tracking-widest">Message</label>
                    <Textarea id="message" required placeholder="How can we help you?" className="min-h-[160px] rounded-xl bg-slate-50 border-none focus-visible:ring-primary/20" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <Button type="submit" className="w-full h-16 text-lg font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: MapPin, title: "Our Location", content: "123 Education Lane, Accra, Ghana", color: "text-blue-600 bg-blue-100" },
                { icon: Phone, title: "Phone Number", content: "+233 20 123 4567\n+233 30 765 4321", color: "text-emerald-600 bg-emerald-100" },
                { icon: Mail, title: "Email Address", content: "info@brightfuture.edu\nadmissions@brightfuture.edu", color: "text-purple-600 bg-purple-100" },
                { icon: Clock, title: "Working Hours", content: "Mon - Fri: 7:30 AM - 4:30 PM\nSat - Sun: Closed", color: "text-amber-600 bg-amber-100" },
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className={`h-14 w-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <item.icon className="h-7 w-7"/>
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm font-medium whitespace-pre-line leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-[360px] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-inner group cursor-pointer border-4 border-white shadow-xl">
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
                 <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <MapPin className="h-10 w-10 text-primary" />
                 </div>
                 <span className="mt-4 font-bold uppercase tracking-widest text-xs text-slate-600">Explore Interactive Map</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
