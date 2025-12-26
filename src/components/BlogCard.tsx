import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const categoryColors = {
    java: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    javascript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };

  return (
    <article 
      className="group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden shadow-card hover:shadow-elevated hover:border-primary/30 transition-smooth"
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 0,
        animation: 'fade-in 0.6s ease-out forwards'
      }}
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 text-xs font-mono font-medium rounded-full border ${categoryColors[post.category]}`}>
          {post.category.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 pt-14">
        <h3 className="font-mono font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-smooth">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString('vi-VN')}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Read More Link */}
        <Link 
          to={`/blog/${post.id}`}
          className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
        >
          Đọc thêm
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </article>
  );
};

export default BlogCard;
