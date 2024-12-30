import React from 'react';
import Sidebar from '../components/dashboard/sidebar';
import DashboardContent from '../components/dashboard/content';


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <div className="flex-shrink-0">
       <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-20 backdrop-blur-md bg-gray-900/50 border-b border-blue-400/20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Page Title */}
              <h1 className="text-2xl  bg-clip-text ml-20 font-thin text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                 <span className="text-white">Dashboard</span> 
              </h1>

              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-white/5 border hidden lg:block border-blue-400/30 rounded-lg 
                      focus:outline-none focus:border-blue-400 text-white placeholder-blue-200/50 transition-colors"
                  />
                </div>
              </div>

              {/* User Section */}
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
                  <div className="relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-blue-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                      />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs 
                      rounded-full flex items-center justify-center">
                      3
                    </span>
                  </div>
                </button>

                {/* Profile */}
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-blue-600/20 
                  rounded-lg transition-colors">
                  <img
                    src="/api/placeholder/32/32"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full bg-blue-600"
                  />
                  <span className="text-white hidden md:inline">Adarsh</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="relative">
          <DashboardContent/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;