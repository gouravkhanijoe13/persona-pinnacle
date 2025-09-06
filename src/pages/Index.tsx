import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll listener for fade-in animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in:not(.visible)');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="section-container py-4">
          <div className="flex justify-between items-center">
            <div className="font-heading font-bold text-xl">
              <span className="text-gradient">Your Name</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <a 
              href="https://calendly.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Schedule Meeting
            </a>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <SocialLinks />
    </main>
  );
};

export default Index;
