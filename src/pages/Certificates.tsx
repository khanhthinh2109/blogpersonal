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

// Bạn có thể thay đổi danh sách chứng chỉ này theo chứng chỉ của bạn
const certificates: Certificate[] = [
  {
    title: 'Thêm chứng chỉ của bạn tại đây',
    issuer: 'Tên tổ chức cấp',
    date: '2024',
    url: '#',
    description: 'Mô tả ngắn về chứng chỉ',
  },
  // Ví dụ các chứng chỉ:
  // {
  //   title: 'AWS Certified Developer - Associate',
  //   issuer: 'Amazon Web Services',
  //   date: '2024-06',
  //   url: 'https://www.credly.com/badges/...',
  //   description: 'Chứng nhận khả năng phát triển và bảo trì ứng dụng trên AWS.',
  // },
  // {
  //   title: 'Oracle Certified Java Programmer',
  //   issuer: 'Oracle',
  //   date: '2024-03',
  //   url: 'https://catalog-education.oracle.com/...',
  //   description: 'Chứng nhận kiến thức nền tảng về lập trình Java.',
  // },
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

          {/* Certificates Grid */}
          <div className="max-w-4xl mx-auto">
            {certificates.length > 0 ? (
              <div className="grid gap-6">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
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
            ) : (
              <div className="text-center py-16">
                <Award className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Chưa có chứng chỉ nào
                </h3>
                <p className="text-muted-foreground">
                  Thêm chứng chỉ của bạn vào file src/pages/Certificates.tsx
                </p>
              </div>
            )}
          </div>

          {/* Instructions for adding certificates */}
          <div className="max-w-4xl mx-auto mt-12 p-6 bg-secondary/50 border border-border rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              📝 Hướng dẫn thêm chứng chỉ
            </h3>
            <p className="text-muted-foreground mb-4">
              Để thêm chứng chỉ của bạn, hãy chỉnh sửa mảng <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">certificates</code> trong file <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">src/pages/Certificates.tsx</code> với format:
            </p>
            <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-foreground">{`{
  title: 'Tên chứng chỉ',
  issuer: 'Tổ chức cấp',
  date: '2024-01',
  url: 'https://link-den-chung-chi.com',
  description: 'Mô tả về chứng chỉ (không bắt buộc)',
}`}</code>
            </pre>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;
