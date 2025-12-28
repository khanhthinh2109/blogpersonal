import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    title: 'Các chứng chỉ trên Credly',
    issuer: 'Credly',
    date: '2025',
    url: 'https://www.credly.com/users/thinh-luong-khanh',
    description:
      'Trang tổng hợp các chứng chỉ và huy hiệu chuyên môn của tôi trên nền tảng Credly.',
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Thành tựu
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chứng chỉ của tôi
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Các chứng chỉ và bằng cấp chuyên môn mà tôi đã đạt được
            </p>
          </div>

          {/* Certificates */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-card border border-border rounded-xl
                             hover:border-primary/50 hover:shadow-lg
                             hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {cert.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1.5">
                              <Building className="w-4 h-4" />
                              {cert.issuer}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {cert.date}
                            </span>
                          </div>

                          {cert.description && (
                            <p className="text-muted-foreground">
                              {cert.description}
                            </p>
                          )}
                        </div>

                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;
