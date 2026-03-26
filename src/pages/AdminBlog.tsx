import { useState, type FormEvent } from 'react';
import { getBlogPosts, saveBlogPosts, type BlogPost } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Pencil, Trash2, GraduationCap, ArrowLeft, Image as ImageIcon, User, Calendar, FileText } from 'lucide-react';

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(() => getBlogPosts());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleDelete = (id: string) => {
    if(window.confirm('Are you sure you want to delete this story? This action cannot be undone.')) {
      const remainingPosts = posts.filter(p => p.id !== id);
      setPosts(remainingPosts);
      saveBlogPosts(remainingPosts);
    }
  };

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    
    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: fd.get('title') as string,
      excerpt: fd.get('excerpt') as string,
      content: fd.get('content') as string,
      imageUrl: fd.get('imageUrl') as string,
      author: fd.get('author') as string || 'Admin',
      date: editingPost?.date || new Date().toISOString()
    };

    let newPosts;
    if (editingPost) {
      newPosts = posts.map(p => p.id === postData.id ? postData : p);
    } else {
      newPosts = [postData, ...posts];
    }

    setPosts(newPosts);
    saveBlogPosts(newPosts);
    setIsDialogOpen(false);
    setEditingPost(null);
  };

  const openEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsDialogOpen(true);
  };

  const openNew = () => {
    setEditingPost(null);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Premium Sidebar */}
      <aside className="w-80 bg-slate-950 text-white flex-shrink-0 flex flex-col p-8 sticky top-0 h-screen overflow-y-auto hidden lg:flex">
        <Link to="/" className="flex items-center space-x-3 mb-16 group hover:opacity-80 transition-opacity">
          <div className="bg-primary p-2.5 rounded-2xl shadow-lg shadow-primary/20">
            <GraduationCap className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-extrabold text-xl leading-none tracking-tight italic">Bright Future</h2>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1.5">Admin Portal</p>
          </div>
        </Link>
        
        <nav className="space-y-4 flex-1">
          <button className="w-full flex items-center space-x-4 px-6 py-4 bg-primary text-white rounded-[1.25rem] font-bold transition-all shadow-xl shadow-primary/20 scale-[1.02]">
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-sm">Content Engine</span>
          </button>
          <button onClick={openNew} className="w-full flex items-center space-x-4 px-6 py-4 text-slate-500 hover:text-white hover:bg-white/5 rounded-[1.25rem] font-bold transition-all group">
            <PlusCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">Draft New Story</span>
          </button>
        </nav>

        <div className="mt-auto pt-10 border-t border-white/5 space-y-4">
           <Link to="/" className="flex items-center space-x-3 text-slate-500 hover:text-white transition-colors px-6 py-3 font-bold text-sm">
             <ArrowLeft className="h-4 w-4" />
             <span>Exit to Website</span>
           </Link>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 p-8 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-block px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Dashboard</div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight italic leading-none">News Manager</h1>
              <p className="text-xl text-slate-500 mt-4 font-medium max-w-lg leading-relaxed">
                Nurturing the academy's digital narrative with impactful stories and updates.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700">
               <Button onClick={openNew} size="lg" className="h-16 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-lg italic">
                 <PlusCircle className="mr-3 h-6 w-6" /> Create Story
               </Button>
            </div>
          </div>

          <div className="grid gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
            {posts.length === 0 ? (
               <div className="text-center py-32 bg-white rounded-[3rem] shadow-xl border-2 border-dashed border-slate-100 flex flex-col items-center">
                  <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-10 w-10 text-slate-300" />
                  </div>
                  <p className="text-2xl font-bold text-slate-400 italic">No stories have been published yet.</p>
                  <Button onClick={openNew} variant="link" className="mt-4 text-primary font-bold text-lg">Start your first draft</Button>
               </div>
            ) : (
              posts.map((post) => (
                <Card key={post.id} className="group flex flex-col sm:flex-row border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-white">
                  <div className="w-full sm:w-64 h-48 sm:h-auto shrink-0 relative overflow-hidden">
                    <img 
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1546410531-b4c4ba94dbfc?auto=format&fit=crop&q=80&w=600'} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 p-8 lg:p-10 flex flex-col">
                    <div className="flex-1 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                         <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">{new Date(post.date).toLocaleDateString()}</span>
                         <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center"><User className="h-3 w-3 mr-1.5" /> {post.author}</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors line-clamp-1 italic">{post.title}</h3>
                      <p className="text-slate-500 mt-3 line-clamp-2 text-lg leading-relaxed font-medium italic">"{post.excerpt}"</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                       <div className="flex items-center -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-100" />
                          <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-100" />
                          <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><Calendar className="h-3 w-3 text-slate-400" /></div>
                       </div>
                       <div className="flex space-x-3">
                         <Button variant="ghost" size="icon" onClick={() => openEdit(post)} className="h-12 w-12 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                           <Pencil className="h-5 w-5" />
                         </Button>
                         <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)} className="h-12 w-12 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all">
                           <Trash2 className="h-5 w-5" />
                         </Button>
                       </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Premium Story Modal */}
        <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if(!open) setEditingPost(null); }}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-none shadow-2xl rounded-[3rem] p-0 gap-0 sm:max-w-4xl">
            <div className="bg-slate-900 p-10 lg:p-14 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
               <DialogHeader className="relative z-10">
                 <div className="inline-block px-3 py-1 bg-white/10 text-primary-foreground rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Editor</div>
                 <DialogTitle className="text-4xl lg:text-5xl font-extrabold tracking-tight italic leading-none">{editingPost ? 'Refine Story' : 'New Creation'}</DialogTitle>
                 <p className="text-slate-400 font-medium mt-3 lg:text-lg italic">Compose the next chapter of Bright Future Academy.</p>
               </DialogHeader>
            </div>
            
            <div className="p-10 lg:p-14 bg-white">
              <form onSubmit={handleSave} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center"><FileText className="h-4 w-4 mr-2" /> Article Headline</label>
                  <Input name="title" defaultValue={editingPost?.title} required className="h-16 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary/20 text-xl font-bold italic" placeholder="Enter a captivating title..." />
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center"><User className="h-4 w-4 mr-2" /> Author</label>
                    <Input name="author" defaultValue={editingPost?.author} required className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary/20 font-bold" placeholder="E.g., Dr. Sarah Mensah" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center"><ImageIcon className="h-4 w-4 mr-2" /> Cover Image URL</label>
                    <Input name="imageUrl" defaultValue={editingPost?.imageUrl} className="h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-primary/20 font-medium" placeholder="https://unsplash.com/..." />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center"><PlusCircle className="h-4 w-4 mr-2" /> Short Preview (Excerpt)</label>
                  <Textarea name="excerpt" defaultValue={editingPost?.excerpt} required className="min-h-[100px] rounded-2xl bg-slate-50 border-none focus-visible:ring-primary/20 text-lg font-medium italic leading-relaxed" placeholder="A brief hook for the story card..." />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center"><FileText className="h-4 w-4 mr-2" /> Main Story</label>
                  <Textarea name="content" defaultValue={editingPost?.content} required className="min-h-[320px] rounded-2xl bg-slate-50 border-none focus-visible:ring-primary/20 text-lg leading-relaxed" placeholder="Tell the full story here..." />
                </div>

                <DialogFooter className="pt-10 border-t border-slate-50 flex flex-col sm:flex-row gap-4 sm:justify-end">
                   <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-14 px-8 rounded-xl font-bold text-slate-400 hover:text-slate-900">
                     Discard Draft
                   </Button>
                   <Button type="submit" className="h-16 px-12 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all italic text-lg">
                     {editingPost ? 'Publish Refinement' : 'Publish Story'}
                   </Button>
                </DialogFooter>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminBlog;
