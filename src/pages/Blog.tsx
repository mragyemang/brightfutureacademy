import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, Search, ChevronRight } from 'lucide-react';
import { getBlogPosts, type BlogPost } from '@/lib/store';

const Blog = () => {
  const posts: BlogPost[] = getBlogPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCount, setDisplayedCount] = useState(6);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visiblePosts = filteredPosts.slice(0, displayedCount);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">News & Updates</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Academy <span className="text-primary italic font-black">Pulse</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Stay inspired with the latest stories, achievements, and announcements from our vibrant community.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search news..." 
              className="pl-14 h-16 bg-white border-none shadow-xl rounded-2xl text-lg focus-visible:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {visiblePosts.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-dashed text-slate-400">
            <p className="text-xl font-medium italic">No stories found matching your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visiblePosts.map(post => (
              <Card key={post.id} className="group flex flex-col overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.imageUrl || 'https://images.unsplash.com/photo-1546410531-b4c4ba94dbfc?auto=format&fit=crop&q=80&w=800'} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </div>
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center"><User className="h-3 w-3 mr-1.5 text-blue-500"/> {post.author}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-4">
                  <p className="text-slate-600 line-clamp-3 text-base leading-relaxed">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button asChild variant="ghost" className="w-full h-12 rounded-xl justify-between hover:bg-primary hover:text-white transition-all duration-300 px-6 font-bold">
                    <Link to={`/blog/${post.id}`}>
                      Read Article <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {filteredPosts.length > displayedCount && (
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setDisplayedCount(prev => prev + 6)}
              className="px-8 border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Load More Posts
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
