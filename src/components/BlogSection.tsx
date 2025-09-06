import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

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
      category: "Technology"
    },
    {
      title: "Building Scalable Digital Solutions",
      excerpt: "A comprehensive guide to creating digital solutions that grow with your business. Learn about architecture patterns, best practices, and implementation strategies.",
      date: "March 10, 2024",
      readTime: "8 min read",
      link: "#",
      category: "Strategy"
    },
    {
      title: "Personal Branding in the Digital Age",
      excerpt: "How to establish and maintain a strong personal brand online. Tips for professionals looking to make their mark in the digital landscape.",
      date: "March 5, 2024",
      readTime: "6 min read",
      link: "#",
      category: "Branding"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-spacing"
      id="blog"
    >
      <div className="section-container">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              My <span className="text-gradient">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, thoughts, and expertise shared through engaging articles
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-card rounded-2xl p-6 hover-lift group cursor-pointer transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Post Content */}
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-text-subtle">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium transition-all duration-300 hover:bg-secondary-hover hover-lift">
              View All Blogs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;