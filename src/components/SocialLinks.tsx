import { Linkedin, Instagram, Calendar, Mail, Github, Twitter, Heart, Sparkles } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/your-profile',
      description: 'Connect professionally'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/your-handle',
      description: 'Follow my journey'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/your-username',
      description: 'View my code'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/your-handle',
      description: 'Join the conversation'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      description: 'Send me a message'
    },
    {
      name: 'Calendly',
      icon: Calendar,
      url: 'https://calendly.com/your-profile',
      description: 'Schedule a meeting'
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-glass-border">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'var(--gradient-primary)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: 'var(--gradient-accent)' }}></div>
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="text-center">
          {/* Premium Footer Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-accent-glow" />
              <div className="text-sm font-medium text-accent-glow tracking-widest uppercase">Stay Connected</div>
            </div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's <span className="text-gradient text-glow">Connect</span>
            </h3>
            <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'var(--gradient-primary)' }}></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Follow me on social media or reach out directly for collaborations and opportunities. 
              I'm always excited to connect with like-minded individuals.
            </p>
          </div>

          {/* Premium Social Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-luxury group"
                  aria-label={`Visit my ${social.name} profile`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <IconComponent className="w-6 h-6 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium mb-1">{social.name}</div>
                    <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Enhanced Primary CTA */}
          <div className="mb-12">
            <div className="glass-premium p-8 rounded-3xl max-w-2xl mx-auto">
              <h4 className="text-2xl font-heading font-bold mb-4 text-gradient">Ready to collaborate?</h4>
              <p className="text-muted-foreground mb-6">
                Let's discuss your next project and bring your ideas to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury group"
                >
                  <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Schedule a Meeting
                  <Sparkles className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="btn-secondary group"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Copyright Section */}
          <div className="border-t border-glass-border pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-gradient">Y</span>
                </div>
                <div className="text-left">
                  <div className="font-heading font-semibold text-gradient">Your Name</div>
                  <div className="text-sm text-muted-foreground">Digital Creator & Innovator</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-accent" />
                  <span>Built with passion</span>
                </div>
                <div>© {new Date().getFullYear()} All rights reserved</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-glass-border">
              <p className="text-xs text-muted-foreground/60">
                Crafted with modern technologies and a touch of creativity. 
                This website represents my commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;