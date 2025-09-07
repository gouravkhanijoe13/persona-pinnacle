import { useState, useEffect, useRef } from 'react';
import { Target, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { settings: aboutSettings, loading } = useSiteSettings('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Default values
  const defaultSettings = {
    title: "About Me",
    story: "With over 8 years of experience in full-stack development, I specialize in creating robust, scalable applications that drive business growth. My passion lies in transforming complex ideas into elegant, user-friendly solutions.",
    mission: "To deliver exceptional software solutions that exceed expectations and drive measurable results.",
    values: "Quality, innovation, and client satisfaction are at the core of everything I do.",
    expertise: [
      {
        title: "Full-Stack Development",
        description: "End-to-end application development with modern frameworks and technologies."
      },
      {
        title: "Cloud Architecture", 
        description: "Scalable cloud solutions using AWS, Azure, and Google Cloud Platform."
      },
      {
        title: "DevOps & Automation",
        description: "CI/CD pipelines, containerization, and infrastructure automation."
      },
      {
        title: "Performance Optimization",
        description: "Advanced techniques for optimizing application speed and efficiency."
      }
    ]
  };

  const settings = aboutSettings || defaultSettings;

  if (loading) {
    return (
      <section className="py-24 relative bg-gradient-to-b from-background/50 to-primary/5">
        <div className="section-container">
          <div className="animate-pulse text-primary text-center">Loading about section...</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="about" className="py-24 relative bg-gradient-to-b from-background/50 to-primary/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className={`fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {settings.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="glass-premium p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {settings.story}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                      <p className="text-muted-foreground text-sm">Comprehensive full-stack development across modern technology stacks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                      <p className="text-muted-foreground text-sm">{settings.mission}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Values</h4>
                      <p className="text-muted-foreground text-sm">{settings.values}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-300">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              
              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-300">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              
              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              
              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-300">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {settings.expertise.map((item, index) => (
              <div key={index} className="glass-card p-6 hover:shadow-elegant transition-all duration-300 group">
                <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Target className="h-8 w-8 text-primary" />}
                  {index === 1 && <Award className="h-8 w-8 text-accent" />}
                  {index === 2 && <Users className="h-8 w-8 text-primary" />}
                  {index === 3 && <Clock className="h-8 w-8 text-accent" />}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="btn-primary group">
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;