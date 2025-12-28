import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, BookOpen, Code, Coffee } from 'lucide-react';

interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
  category: 'java' | 'javascript';
}

const articles: Article[] = [
  {
    title: 'Spring Boot Tutorial for Beginners',
    description: 'Hướng dẫn xây dựng REST API với Spring Boot từ cơ bản đến nâng cao.',
    url: 'https://spring.io/guides/gs/rest-service/',
    source: 'Spring.io',
    category: 'java',
  },
  {
    title: 'Java Servlet Tutorial',
    description: 'Tìm hiểu về Java Servlet và cách xây dựng ứng dụng web với Jakarta EE.',
    url: 'https://docs.oracle.com/javaee/7/tutorial/servlets.htm',
    source: 'Oracle',
    category: 'java',
  },
  {
    title: 'JSP và JSTL Tutorial',
    description: 'Hướng dẫn sử dụng JavaServer Pages và JSTL để tạo giao diện web động.',
    url: 'https://www.javatpoint.com/jsp-tutorial',
    source: 'JavaTPoint',
    category: 'java',
  },
  {
    title: 'Hibernate ORM Guide',
    description: 'Tìm hiểu Hibernate ORM để mapping Object-Relational trong Java.',
    url: 'https://hibernate.org/orm/documentation/',
    source: 'Hibernate.org',
    category: 'java',
  },
  {
    title: 'React Documentation',
    description: 'Tài liệu chính thức của React - thư viện JavaScript phổ biến nhất để xây dựng UI.',
    url: 'https://react.dev/',
    source: 'React.dev',
    category: 'javascript',
  },
  {
    title: 'Node.js Tutorial',
    description: 'Xây dựng backend với Node.js - runtime JavaScript phía server.',
    url: 'https://nodejs.org/en/learn',
    source: 'Node.js',
    category: 'javascript',
  },
  {
    title: 'Express.js Guide',
    description: 'Framework web nhanh, tối giản cho Node.js.',
    url: 'https://expressjs.com/',
    source: 'Express.js',
    category: 'javascript',
  },
  {
    title: 'Next.js Documentation',
    description: 'Framework React cho production với SSR và SSG.',
    url: 'https://nextjs.org/docs',
    source: 'Vercel',
    category: 'javascript',
  },
  {
    title: 'TypeScript Handbook',
    description: 'Học TypeScript - JavaScript với static typing.',
    url: 'https://www.typescriptlang.org/docs/',
    source: 'Microsoft',
    category: 'javascript',
  },
  {
    title: 'Vue.js Guide',
    description: 'Framework JavaScript progressive cho xây dựng UI.',
    url: 'https://vuejs.org/guide/introduction.html',
    source: 'Vue.js',
    category: 'javascript',
  },
];

const Articles = () => {
  const javaArticles = articles.filter(a => a.category === 'java');
  const jsArticles = articles.filter(a => a.category === 'javascript');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Tài liệu tham khảo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bài viết về Lập trình Web
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tổng hợp các bài báo và tài liệu hữu ích về lập trình web với Java và JavaScript
            </p>
          </div>

          {/* Java Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Coffee className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-bold text-foreground">Java Web Development</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {javaArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-card border border-border rounded-xl hover:border-orange-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
                          {article.source}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {article.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* JavaScript Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl font-bold text-foreground">JavaScript Web Development</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {jsArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-card border border-border rounded-xl hover:border-yellow-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                          {article.source}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-yellow-500 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {article.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
