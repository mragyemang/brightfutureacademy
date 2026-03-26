import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogPosts, type BlogPost } from '@/lib/store';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post: BlogPost | null = (() => {
    const posts = getBlogPosts();
    return posts.find(p => p.id === id) || null;
  })();

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <article className="py-20 lg:py-32 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-12 -ml-4 text-slate-500 hover:text-primary rounded-full hover:bg-primary/5 transition-all">
          <Link to="/blog" className="flex items-center px-4 font-bold text-sm"><ArrowLeft className="mr-2 h-5 w-5" /> Back to News</Link>
        </Button>

        <header className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
             <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
             </div>
             <div>
                <p className="text-sm font-bold text-slate-900 leading-none">{post.author}</p>
                <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
             </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.15] tracking-tight italic">
            {post.title}
          </h1>
          
          <div className="flex border-y py-6 items-center justify-between">
            <div className="flex items-center space-x-6">
               <span className="flex items-center text-sm font-bold text-slate-500 tracking-widest uppercase">
                 <Calendar className="h-4 w-4 mr-2 text-primary"/> Reading Time: 5 min
               </span>
            </div>
            <Button variant="outline" size="sm" className="rounded-full font-bold px-6 border-slate-200" onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <Share2 className="mr-2 h-4 w-4" /> Share Article
            </Button>
          </div>
        </header>

        <figure className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-video group">
          <img 
            src={post.imageUrl || 'https://images.unsplash.com/photo-1546410531-b4c4ba94dbfc?auto=format&fit=crop&q=80&w=1200'} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
        </figure>

        <div className="prose prose-xl prose-slate max-w-none text-slate-700 leading-relaxed font-medium">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className={paragraph.trim() ? "mb-8" : "mb-4"}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t flex items-center justify-center">
           <div className="text-center">
             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Enjoyed this story?</p>
             <Button asChild size="lg" className="rounded-full px-12 h-14 font-bold shadow-xl shadow-primary/20">
               <Link to="/blog">Browse More Stories</Link>
             </Button>
           </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
