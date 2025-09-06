import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling and animations
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-luxury:not(.visible)');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 navbar-glass z-50">
        <div className="section-container py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center">
                <span className="text-lg font-heading font-bold text-gradient">Y</span>
              </div>
              <span className="font-heading font-bold text-xl text-gradient">Your Name</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-gradient transition-colors font-medium">About</a>
              <a href="#blog" className="text-muted-foreground hover:text-gradient transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-muted-foreground hover:text-gradient transition-colors font-medium">Contact</a>
            </div>
            <a 
              href="https://calendly.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Schedule Meeting
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <SocialLinks />
    </main>
  );
};

export default Index;
