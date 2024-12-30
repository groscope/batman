import React, { useState } from 'react';
import { User, Lock, Mail, Phone, Building } from 'lucide-react';
import Header from '../components/header';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <><Header/>
    <div className="relative min-h-screen w-full mt-4 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle at center, 
                ${['#60A5FA', '#3B82F6', '#2563EB'][Math.floor(Math.random() * 3)]}55, 
                transparent)`,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Registration form card */}
        <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-lg bg-white/10">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text font-thin text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Introduce  <span className="text-red-500">Yourself</span>
            </span>
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name field */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone field */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Company field */}
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Confirm Password field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-10 py-3 bg-white/5 border border-blue-400/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            {/* Register button */}
            <button 
              type="submit"
              className="group relative w-full px-8 py-3 text-lg font-medium"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="relative text-white group-hover:text-white">Create Account</span>
            </button>

            {/* Login link */}
            <div className="text-center text-sm text-blue-200">
              Already have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
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
    </>
  );
};

export default Register;