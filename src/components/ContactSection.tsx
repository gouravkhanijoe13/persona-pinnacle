import { useState, useEffect, useRef } from 'react';
import { Mail, MessageCircle, Calendar, Send, Phone, MapPin, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Book a time that works for both of us",
      action: "Schedule Now",
      highlight: true
    },
    {
      icon: Mail,
      title: "Send an Email",
      description: "your.email@example.com",
      action: "Send Email",
      highlight: false
    },
    {
      icon: Phone,
      title: "Quick Call",
      description: "+1 (555) 123-4567",
      action: "Call Now",
      highlight: false
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Your City, Country",
      action: "View Location",
      highlight: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'var(--gradient-accent)' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: 'var(--gradient-primary)' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent-glow" />
              <div className="text-sm font-medium text-accent-glow tracking-widest uppercase">Let's collaborate</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Connect <span className="text-gradient text-glow">With Me</span>
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full mb-8" style={{ background: 'var(--gradient-primary)' }}></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Feel free to reach out for collaborations, questions, or inquiries. Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Enhanced Contact Options */}
            <div className="space-y-8">
              <div className="glass-premium p-8 rounded-3xl">
                <h3 className="text-3xl font-heading font-semibold mb-6 text-gradient">Let's Start a Conversation</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Choose the best way to reach out, and I'll get back to you as soon as possible. 
                  I'm always excited to discuss new opportunities and creative projects.
                </p>

                {/* Contact Methods Grid */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index}
                      className={`glass-card rounded-2xl hover-luxury group cursor-pointer transition-all duration-500 ${
                        method.highlight ? 'ring-2 ring-primary/30' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-6 p-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          method.highlight 
                            ? 'bg-primary text-primary-foreground group-hover:scale-110' 
                            : 'glass-card group-hover:bg-primary group-hover:text-primary-foreground'
                        }`}>
                          <method.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-lg mb-1 group-hover:text-gradient transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                          <span className="text-primary text-sm font-medium">{method.action}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className="mt-8">
                  <button className="btn-luxury w-full group">
                    <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    Schedule a Meeting
                    <Sparkles className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Contact Form */}
            <div className="glass-premium p-10 rounded-3xl hover-luxury">
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">Quick Message</h3>
                <p className="text-muted-foreground">
                  Send me a message and I'll respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 glass-card border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-transparent text-foreground placeholder-muted-foreground"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 glass-card border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-transparent text-foreground placeholder-muted-foreground"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 glass-card border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none bg-transparent text-foreground placeholder-muted-foreground"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-luxury group"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  Send Message
                  <MessageCircle className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;