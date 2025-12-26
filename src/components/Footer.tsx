import { Code2, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-mono font-bold">DevBlog</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Blog chia sẻ kiến thức lập trình Java và JavaScript. 
              Personal Blog - 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono font-semibold text-foreground">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono font-semibold text-foreground">Liên hệ</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/khanhthinh2109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:luongkhanhthinh33@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 DevBlog. Personal Blog - Made with Khanh Thinh ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
