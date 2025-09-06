import { useState, useEffect, useRef } from 'react';
import { Target, Award, Users, Clock, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const expertise = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Turning complex challenges into elegant solutions through strategic thinking and innovative approaches."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Delivering excellence in every project with attention to detail and commitment to perfection."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Building lasting partnerships through collaboration, communication, and exceptional service."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Meeting deadlines while maintaining the highest standards of quality and professionalism."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'var(--gradient-accent)' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: 'var(--gradient-primary)' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-accent-glow mb-4 tracking-widest uppercase">Get to know me</div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              About <span className="text-gradient text-glow">Me</span>
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-primary)' }}></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Content Grid with Glass Cards */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Enhanced Text Content */}
            <div className="space-y-8">
              <div className="glass-premium p-8 rounded-3xl hover-luxury">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">My Story</h3>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    I specialize in <span className="text-gradient font-semibold">specific expertise or services you offer</span> and aim to{' '}
                    <span className="text-gradient font-semibold">short mission statement</span>.
                  </p>
                  
                  <p className="text-muted-foreground">
                    With a background in [your field], I bring a unique perspective to every project. 
                    My approach combines technical expertise with creative problem-solving to deliver 
                    exceptional results that exceed expectations.
                  </p>
                </div>

                {/* Enhanced Key Points */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ background: 'var(--gradient-primary)' }}></div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-gradient font-semibold">Expertise:</span> Your specific area of expertise and skills
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ background: 'var(--gradient-accent)' }}></div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-gradient font-semibold">Mission:</span> Helping clients achieve their goals through innovative solutions
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform" style={{ background: 'var(--gradient-primary)' }}></div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-gradient font-semibold">Values:</span> Quality, innovation, and client satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-premium p-8 rounded-3xl text-center hover-luxury group">
                <div className="text-4xl font-heading font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="glass-premium p-8 rounded-3xl text-center hover-luxury group">
                <div className="text-4xl font-heading font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">100+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="glass-premium p-8 rounded-3xl text-center hover-luxury group">
                <div className="text-4xl font-heading font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="glass-premium p-8 rounded-3xl text-center hover-luxury group">
                <div className="text-4xl font-heading font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">Support Available</div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-3xl hover-luxury group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl glass-premium flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-gradient" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-4 group-hover:text-gradient transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="btn-luxury hover-glow group">
              Let's Work Together
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;