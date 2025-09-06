import { useState, useEffect, useRef } from 'react';

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

  return (
    <section 
      ref={sectionRef}
      className="section-spacing bg-surface-elevated"
      id="about"
    >
      <div className="section-container">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I specialize in <span className="text-primary font-medium">specific expertise or services you offer</span> and aim to{' '}
                  <span className="text-primary font-medium">short mission statement</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  With a background in [your field], I bring a unique perspective to every project. 
                  My approach combines technical expertise with creative problem-solving to deliver 
                  exceptional results that exceed expectations.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Expertise:</span> Your specific area of expertise and skills
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Mission:</span> Helping clients achieve their goals through innovative solutions
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Values:</span> Quality, innovation, and client satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Stats or Visual Element */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-2xl text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-8 rounded-2xl text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card p-8 rounded-2xl text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card p-8 rounded-2xl text-center hover-lift">
                <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;