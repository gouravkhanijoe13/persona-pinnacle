import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Star } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'var(--gradient-primary)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'var(--gradient-accent)' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`text-center fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-20 floating">
            <Star className="w-8 h-8 text-accent opacity-60" />
          </div>
          <div className="absolute top-40 right-32 floating" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-6 h-6 text-primary opacity-40" />
          </div>
          <div className="absolute bottom-32 left-40 floating" style={{ animationDelay: '4s' }}>
            <Star className="w-4 h-4 text-accent opacity-30" />
          </div>

          {/* Profile Image with Premium Effects */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="profile-luxury">
                <img
                  src={profileImage}
                  alt="Your Name - Profile"
                  className="w-48 h-48 rounded-full object-cover relative z-20"
                />
              </div>
              {/* Additional glow layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl"></div>
              <div className="absolute top-2 left-2 w-8 h-8 bg-accent rounded-full opacity-80 blur-sm"></div>
              <div className="absolute bottom-4 right-6 w-6 h-6 bg-primary rounded-full opacity-60 blur-sm"></div>
            </div>
          </div>

          {/* Main Heading with Advanced Typography */}
          <div className="mb-8 space-y-4">
            <div className="text-lg font-medium text-muted-foreground mb-2 tracking-wider uppercase opacity-80">
              Welcome to my digital space
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Hey there, I'm{' '}
              <span className="text-gradient text-glow">Your Name</span>
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-body leading-relaxed">
              A <span className="text-gradient font-semibold">Your Profession</span> with a passion for{' '}
              <span className="text-gradient font-semibold">Your Focus/Area of Expertise</span>
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Crafting digital experiences that inspire, innovate, and transform ideas into reality
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-luxury hover-glow group">
              <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              Schedule a Meeting
            </button>
            <button className="btn-secondary hover-luxury">
              View My Work
            </button>
          </div>

          {/* Enhanced Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl hover-luxury">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-luxury">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Done</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-luxury">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-luxury">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Available</div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="mx-auto w-8 h-16 border-2 border-glass-border rounded-full flex justify-center glass-card">
              <ArrowDown className="w-4 h-4 text-muted-foreground mt-4" />
            </div>
            <p className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;