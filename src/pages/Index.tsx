import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, Settings } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const { user, isAdmin } = useAuth();
  
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
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Alex Thompson
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  {isAdmin && (
                    <Link to="/admin">
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Admin
                      </Button>
                    </Link>
                  )}
                </>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
              <button className="btn-primary text-sm px-4 py-2">
                Schedule Meeting
              </button>
            </div>
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