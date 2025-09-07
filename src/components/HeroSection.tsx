import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Star } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { settings: heroSettings, loading } = useSiteSettings('hero');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Default values to prevent undefined errors
  const defaultSettings = {
    name: "Alex Thompson",
    title: "Senior Full Stack Developer",
    subtitle: "Crafting exceptional digital experiences with cutting-edge technology and premium design",
    stats: {
      experience: "8+",
      projects: "150+",
      clients: "50+",
      availability: "Available"
    }
  };

  const settings = heroSettings || defaultSettings;

  if (loading) {
    return (
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="animate-pulse text-primary">Loading...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-primary/20">
        <Star className="h-12 w-12 animate-float-slow" />
      </div>
      <div className="absolute bottom-20 right-20 text-accent/20">
        <Sparkles className="h-16 w-16 animate-float-delayed" />
      </div>
      <div className="absolute top-1/2 left-10 text-primary/10">
        <Star className="h-8 w-8 animate-float" />
      </div>
      <div className="absolute top-1/3 right-10 text-accent/10">
        <Sparkles className="h-10 w-10 animate-float-slow" />
      </div>

      <div className="section-container relative z-10">
        <div className={`fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          <div className="text-center">
            
            {/* Profile Image with Premium Styling */}
            <div className="relative inline-block mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-elegant bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={profileImage} 
                    alt="Professional headshot" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full shadow-glow opacity-50"></div>
              </div>
            </div>

            {/* Main Content */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                {settings.name}
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-light mb-8 text-accent">
              {settings.title}
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              {settings.subtitle}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="btn-primary group">
                Schedule a Meeting
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button className="btn-secondary">
                View My Work
              </button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-primary mb-1">{settings.stats.experience}</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-accent mb-1">{settings.stats.projects}</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-primary mb-1">{settings.stats.clients}</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass-card text-center p-4">
                <div className="text-2xl font-bold text-accent mb-1">{settings.stats.availability}</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary mx-auto mb-2" />
          <div className="text-sm text-muted-foreground">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;