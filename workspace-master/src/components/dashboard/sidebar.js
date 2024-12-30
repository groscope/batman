import React, { useState } from 'react';
import { 
  Home,
  LayoutDashboard,
  Users,
  FolderKanban,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  User
} from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'team', icon: Users, label: 'Team' },
  ];

  const bottomMenuItems = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support' },
    { id: 'logout', icon: LogOut, label: 'Logout' },
  ];

  return (
    <div className="relative min-h-screen " style={{zIndex:999}}>
      {/* Animated background with reduced number of circles */}
      {/* <div className="fixed inset-0 w-72 overflow-hidden ">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              background: `radial-gradient(circle at center, 
                ${['#60A5FA', '#3B82F6', '#2563EB'][Math.floor(Math.random() * 3)]}33, 
                transparent)`,
              animation: `float ${Math.random() * 10 + 20}s infinite linear`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div> */}

      {/* Sidebar content */}
      <div className={`fixed z-10 bg-black/5 h-screen ${isExpanded ? 'w-72' : 'w-20'} 
        transition-all duration-300 ease-in-out backdrop-blur-md `}>
        
        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-4 top-8 bg-blue-600 rounded-full p-1 
            transform hover:scale-110 transition-transform duration-200"
        >
          {isExpanded ? (
            <ChevronLeft size={20} className="text-white" />
          ) : (
            <ChevronRight size={20} className="text-white" />
          )}
        </button>

        {/* User profile section */}
        <div className="px-4 py-6 border-b border-blue-400/20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 
                flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full 
                border-2 border-gray-900" />
            </div>
            {isExpanded && (
              <div className="flex-1 transition-opacity duration-200">
                <h2 className="text-white font-medium">John Doe</h2>
                <p className="text-blue-200 text-sm">Admin</p>
              </div>
            )}
          </div>
        </div>

        {/* Main menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg 
                transition-all duration-200 group
                ${activeItem === item.id 
                  ? 'bg-blue-600/50 text-white' 
                  : 'text-blue-200 hover:bg-blue-600/30'}`}
            >
              <item.icon size={22} className="shrink-0" />
              {isExpanded && (
                <span className="transition-opacity duration-200">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom menu */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-400/20">
          <div className="space-y-2">
            {bottomMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg 
                  transition-all duration-200
                  ${activeItem === item.id 
                    ? 'bg-blue-600/50 text-white' 
                    : 'text-blue-200 hover:bg-blue-600/30'}`}
              >
                <item.icon size={22} className="shrink-0" />
                {isExpanded && (
                  <span className="transition-opacity duration-200">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;