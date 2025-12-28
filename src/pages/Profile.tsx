import { Mail, Github, MapPin, GraduationCap, Code2, BookOpen, Coffee, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const skills = [
    { name: 'Java', level: 85, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 90, color: 'bg-blue-500' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'Git', level: 80, color: 'bg-red-500' },
    { name: 'SQL', level: 70, color: 'bg-green-500' },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Đồ án Blog cá nhân',
      description: 'Xây dựng blog chia sẻ kiến thức lập trình với Hugo SSG',
      icon: BookOpen,
    },
    {
      year: '2023',
      title: 'Học JavaScript nâng cao',
      description: 'Tìm hiểu ES6+, Async/Await, React và các framework hiện đại',
      icon: Code2,
    },
    {
      year: '2022',
      title: 'Bắt đầu học Java',
      description: 'Làm quen với OOP, Collections Framework, Exception Handling',
      icon: Coffee,
    },
    {
      year: '2021',
      title: 'Ho Chi Minh City University of Technology',
      description: 'Bắt đầu hành trình học Công nghệ thông tin',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Avatar */}
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-cyan-400 p-1 animate-fade-in">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <img
                      src="/avatar.png"
                      alt="Lương Khánh Thịnh"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
                  <span className="text-xl">👨‍💻</span>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 animate-fade-in">
                  Lương Khánh Thịnh
                </h1>
                <p className="text-primary font-mono text-lg mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  Web Developer | Student
                </p>
                <p className="text-muted-foreground max-w-md mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                  Sinh viên CNTT đam mê lập trình. Thích chia sẻ kiến thức và học hỏi công nghệ mới.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Việt Nam
                  </span>
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    Đại học Công nghệ TP.HCM
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center md:justify-start gap-4 mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <Button variant="hero" asChild>
                    <a href="mailto:luongkhanhthinh33@gmail.com">
                      <Mail className="w-4 h-4" />
                      Liên hệ
                    </a>
                  </Button>
                  <Button variant="hero-outline" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* About Me */}
              <div>
                <h2 className="font-mono text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Về tôi
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Xin chào! Tôi là sinh viên ngành Công nghệ thông tin, hiện đang theo học tại Đại học Công nghệ TP.HCM.
                  </p>
                  <p>
                    Đam mê của tôi là lập trình web và phát triển phần mềm. Tôi đặc biệt yêu thích Java và JavaScript - hai ngôn ngữ mạnh mẽ cho backend và frontend development.
                  </p>
                  <p>
                    Blog này là nơi tôi chia sẻ những kiến thức đã học được trong quá trình học tập và nghiên cứu.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-mono text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  Kỹ năng
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
              Hành trình học tập
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="pl-16 md:pl-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-mono mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-mono text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-card">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
              Liên hệ với tôi
            </h2>
            <p className="text-muted-foreground mb-8">
              Nếu bạn có câu hỏi hoặc muốn kết nối, đừng ngần ngại liên hệ!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:luongkhanhthinh33@gmail.com"
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-smooth w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm text-foreground">luongkhanhthinh33@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/khanhthinh2109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-smooth w-full sm:w-auto"
              >
                <Github className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm text-foreground">github.com/khanhthinh2109</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
