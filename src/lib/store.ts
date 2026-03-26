export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome back to a New Academic Year',
    excerpt: 'As we open our doors for another exciting year, we look forward to achieving new milestones.',
    content: 'Long content here... Welcome back students and parents! This year promises to be full of exciting educational opportunities, new curriculum additions, and extensive extracurricular programs. Our faculty has been working hard over the break to prepare an engaging syllabus.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    author: 'Admin',
    date: '2026-09-01'
  },
  {
    id: '2',
    title: 'Science Fair 2026 Winners Announced',
    excerpt: 'Congratulations to our outstanding students who participated in this year\'s Regional Science Fair.',
    content: 'We are incredibly proud to announce that our students secured first place in the Robotics and Environmental Science categories. Their projects demonstrated innovative thinking and a deep understanding of sustainable technologies...',
    imageUrl: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80&w=800',
    author: 'Science Dept',
    date: '2026-03-15'
  },
  {
    id: '3',
    title: 'New Library Wing Opening',
    excerpt: 'Our newly renovated library wing features state-of-the-art digital resources and expanded study spaces.',
    content: 'The highly anticipated new library wing is finally open! It features an expanded digital research center, quiet study pods, and a vast collection of new literary resources to support our students\' academic journeys.',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
    author: 'Librarian',
    date: '2026-02-10'
  }
];

export const getBlogPosts = (): BlogPost[] => {
  const stored = localStorage.getItem('bfa_blog_posts');
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem('bfa_blog_posts', JSON.stringify(initialPosts));
  return initialPosts;
};

export const saveBlogPosts = (posts: BlogPost[]) => {
  localStorage.setItem('bfa_blog_posts', JSON.stringify(posts));
};
