import { Linkedin, Instagram, Calendar, Mail, Github, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/your-profile',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/your-handle',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Calendly',
      icon: Calendar,
      url: 'https://calendly.com/your-profile',
      color: 'hover:bg-green-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:bg-red-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/your-username',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/your-handle',
      color: 'hover:bg-blue-500'
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="text-center">
          {/* Footer Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Follow me on social media or reach out directly for collaborations and opportunities.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <a
              href="https://calendly.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-primary"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Meeting
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. Built with passion and modern technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;