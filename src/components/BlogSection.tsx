import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const BlogSection = () => {
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

  const blogPosts = [
    {
      title: "The Future of Modern Web Development",
      excerpt: "Exploring cutting-edge technologies and trends that are shaping the future of web development. From AI integration to progressive web apps, discover what's next.",
      date: "March 15, 2024",
      readTime: "5 min read",
      link: "#",
      category: "Technology",
      featured: true
    },
    {
      title: "Building Scalable Digital Solutions",
      excerpt: "A comprehensive guide to creating digital solutions that grow with your business. Learn about architecture patterns, best practices, and implementation strategies.",
      date: "March 10, 2024",
      readTime: "8 min read",
      link: "#",
      category: "Strategy",
      featured: false
    },
    {
      title: "Personal Branding in the Digital Age",
      excerpt: "How to establish and maintain a strong personal brand online. Tips for professionals looking to make their mark in the digital landscape.",
      date: "March 5, 2024",
      readTime: "6 min read",
      link: "#",
      category: "Branding",
      featured: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      id="blog"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'var(--gradient-primary)' }}></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: 'var(--gradient-accent)' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`fade-in-luxury ${isVisible ? 'visible' : ''}`}>
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-accent-glow" />
              <div className="text-sm font-medium text-accent-glow tracking-widest uppercase">Latest Insights</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              My <span className="text-gradient text-glow">Blogs</span>
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full mb-8" style={{ background: 'var(--gradient-primary)' }}></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, thoughts, and expertise shared through engaging articles that inspire and educate
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="mb-16">
              <div className="glass-premium p-10 rounded-3xl hover-luxury group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 rounded-full text-sm font-semibold glass-card border border-glass-border">
                        <TrendingUp className="w-4 h-4 inline mr-2" />
                        Featured Article
                      </span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 group-hover:text-gradient transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="w-full h-48 rounded-xl" style={{ background: 'var(--gradient-hero)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={index}
                className="glass-card p-8 rounded-3xl hover-luxury group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image Placeholder */}
                <div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden" style={{ background: 'var(--gradient-secondary)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-gradient transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Enhanced View All Button */}
          <div className="text-center">
            <button className="btn-secondary hover-luxury group">
              <BookOpen className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              View All Blogs
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;