import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  Send
} from 'lucide-react';

// Work Section Component
const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "MongoDB"],
      description: "A full-featured e-commerce platform with payment integration",
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Dashboard",
      category: "frontend",
      image: "/api/placeholder/600/400",
      tech: ["React", "Redux", "Tailwind"],
      description: "Real-time social media analytics dashboard",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management API",
      category: "backend",
      image: "/api/placeholder/600/400",
      tech: ["Node.js", "Express", "PostgreSQL"],
      description: "RESTful API for task management system",
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      category: "frontend",
      image: "/api/placeholder/600/400",
      tech: ["React", "Tailwind", "Framer"],
      description: "Personal portfolio website with animations",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-pulse">
            My Work
          </h2>
          <p className="text-blue-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my recent projects and creative endeavors
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'backend', 'fullstack'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105
                ${activeFilter === filter 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/30 rounded-full text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white hover:text-blue-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.link} className="text-white hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-pulse">
            Get In Touch
          </h2>
          <p className="text-blue-300 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-blue-300">
                  <Mail className="w-6 h-6" />
                  <span>example@email.com</span>
                </div>
                <div className="flex items-center gap-4 text-blue-300">
                  <Phone className="w-6 h-6" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-4 text-blue-300">
                  <MapPin className="w-6 h-6" />
                  <span>New York, NY</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full px-8 py-4 text-lg font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? 'translate-x-2' : 'group-hover:translate-x-2'}`} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 mb-4">
              Creating digital experiences that make a difference
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and news about my latest projects
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Export all components
export { WorkSection, ContactForm, Footer };