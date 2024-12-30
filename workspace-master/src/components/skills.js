import React, { useState } from 'react';
import { Code, Palette, Database, Server, Globe, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: "devicon:html5" },

        { name: "Css", level: 80, icon: "devicon:css3" },

        { name: "JavaScript", level: 85, icon: "devicon:javascript" },
        { name: "Tailwind", level: 88, icon: "devicon:tailwindcss" },
        { name: "Bootstrap", level: 88, icon: "devicon:bootstrap" },

      ]
    },
    
    backend: {
      icon: <Server className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Node.js", level: 85, icon: "devicon:nodejs" },
        { name: "Python", level: 80, icon: "devicon:python" },
        { name: "PHP", level: 75, icon: "devicon:php" },
        { name: "Java", level: 90, icon: "devicon:java" },
        { name: "C#", level: 75, icon: "devicon:csharp" },
      ]
    },
    database: {
      icon: <Database className="w-6 h-6" />,
      title: "Database And Other Skills",
      skills: [
        { name: "MongoDB", level: 85, icon: "devicon:mongodb" },
        { name: "MySQL", level: 80, icon: "devicon:mysql" },
        // { name: "PostgreSQL", level: 75, icon: "devicon:postgresql" },
        // { name: "Redis", level: 70, icon: "devicon:redis" },
        // { name: "Firebase", level: 85, icon: "devicon:firebase" },
        { name: "Git", level: 90, icon: "devicon:git" },
        { name: "composer", level: 75, icon: "devicon:composer" },
        { name: "Filezilla", level: 70, icon: "devicon:filezilla" },
      ]
    },
    // other: {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Other Skills",
    //   skills: [
    //     { name: "Git", level: 90, icon: "devicon:git" },
    //     { name: "Docker", level: 75, icon: "devicon:docker" },
    //     { name: "AWS", level: 70, icon: "devicon:amazonwebservices" },
    //     { name: "CI/CD", level: 80, icon: "carbon:pipeline" },
    //     { name: "Testing", level: 85, icon: "carbon:test-tool" },
    //   ]
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-gray-900 py-20 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-pulse">
          My Skills
        </h2>
        <p className="text-blue-300 text-lg md:text-xl max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105
                ${activeCategory === key 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="aspect-square p-6 bg-gray-800/50 rounded-xl flex flex-col items-center justify-center gap-4 group-hover:bg-blue-900/30 transition-all duration-300">
                <img
                  src={`https://api.iconify.design/${skill.icon}.svg`}
                  alt={skill.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-white font-medium text-center">{skill.name}</span>
                
                {/* Skill Level Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 rounded-b-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Hover Details */}
              {hoveredSkill === skill.name && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-blue-900/90 text-white px-4 py-2 rounded-lg shadow-lg z-10 whitespace-nowrap">
                  Proficiency: {skill.level}%
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                background: `radial-gradient(circle at center, 
                  ${['#60A5FA', '#3B82F6', '#2563EB'][Math.floor(Math.random() * 3)]}33, 
                  transparent)`,
                animation: `float ${Math.random() * 10 + 10}s infinite linear`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Add required styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;