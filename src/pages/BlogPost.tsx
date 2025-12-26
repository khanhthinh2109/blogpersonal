import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostById, blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/BlogCard';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const categoryColors = {
    java: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    javascript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className={`px-3 py-1 text-sm font-mono font-medium rounded-full border ${categoryColors[post.category]}`}>
                {post.category.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-mono prose-headings:text-foreground
                prose-h1:text-3xl prose-h1:mb-6
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-primary
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              {/* Render markdown content as HTML-like structure */}
              {post.content.split('\n').map((line, i) => {
                // Headers
                if (line.startsWith('# ')) {
                  return <h1 key={i} className="mt-0">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={i}>{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i}>{line.slice(4)}</h3>;
                }
                // Code blocks
                if (line.startsWith('```')) {
                  return null; // Handle separately
                }
                // Empty lines
                if (line.trim() === '') {
                  return null;
                }
                // Regular paragraphs
                return <p key={i}>{line}</p>;
              })}

              {/* Display formatted code blocks */}
              {post.content.split('```').map((block, i) => {
                if (i % 2 === 1) {
                  const [lang, ...codeLines] = block.split('\n');
                  const code = codeLines.join('\n').trim();
                  return (
                    <pre key={`code-${i}`} className="overflow-x-auto">
                      <code className={`language-${lang}`}>
                        {code}
                      </code>
                    </pre>
                  );
                }
                return null;
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card/50 border-t border-border/50">
          <div className="container mx-auto px-4">
            <h2 className="font-mono text-2xl font-bold text-foreground mb-8 text-center">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
