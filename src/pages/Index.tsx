import { Link } from 'react-router-dom';
import { ArrowRight, Code2, BookOpen, User, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto relative z-10 text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Coffee className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-mono">Đồ án học phần 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="text-foreground">
              Xin chào,tôi là Lương Khánh Thịnh,một 
            </span>
            <span className="mx-4 text-gradient">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Blog chia sẻ kiến thức lập trình{' '}
            <span className="text-orange-400 font-semibold">Java</span> và{' '}
            <span className="text-yellow-400 font-semibold">JavaScript</span>.
            Cùng học hỏi và phát triển kỹ năng coding.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/blog">
                <BookOpen className="w-5 h-5" />
                Xem Blog
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/profile">
                <User className="w-5 h-5" />
                Về tôi
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-primary">9+</div>
              <div className="text-sm text-muted-foreground">Bài viết</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-orange-400">Java</div>
              <div className="text-sm text-muted-foreground">Backend</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-mono text-3xl font-bold text-yellow-400">JS</div>
              <div className="text-sm text-muted-foreground">Frontend</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              Bài viết nổi bật
            </span>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
              Khám phá kiến thức mới
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Các bài viết chia sẻ kiến thức lập trình Java và JavaScript được chọn lọc
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog" className="group">
                Xem tất cả bài viết
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
              Công nghệ được chia sẻ
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Java', color: 'text-orange-400', icon: '☕' },
              { name: 'JavaScript', color: 'text-yellow-400', icon: '📜' },
              { name: 'HTML/CSS', color: 'text-blue-400', icon: '🌐' },
              { name: 'Git', color: 'text-red-400', icon: '📚' },
            ].map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-smooth"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className={`font-mono font-semibold ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl bg-gradient-card border border-border/50 p-8 md:p-16 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <Code2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-mono text-2xl md:text-4xl font-bold text-foreground mb-4">
                Cùng học lập trình
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Khám phá các bài viết về Java và JavaScript, từ cơ bản đến nâng cao.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/blog">
                  Bắt đầu ngay
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
