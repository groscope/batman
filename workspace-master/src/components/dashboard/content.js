import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import {
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Boxes,
  CircleDollarSign,
  Clock,
  BellRing,
  MoreVertical,
} from 'lucide-react';

const DashboardContent = () => {
  // Sample data for charts
  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
  ];

  const pieData = [
    { name: 'React', value: 400 },
    { name: 'Laravel', value: 300 },
    { name: 'Vue', value: 200 },
    { name: 'Angular', value: 100 },
  ];

  const COLORS = ['#60A5FA', '#3B82F6', '#2563EB', '#1E40AF'];

  const notifications = [
    { id: 1, title: 'New project request', time: '2 min ago', type: 'urgent' },
    { id: 2, title: 'Meeting scheduled', time: '1 hour ago', type: 'info' },
    { id: 3, title: 'Task completed', time: '3 hours ago', type: 'success' },
  ];

  const stats = [
    { 
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+3.2%',
      isPositive: true,
      icon: Boxes
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '-2.4%',
      isPositive: false,
      icon: CircleDollarSign
    },
    {
      title: 'Avg Response',
      value: '1.2h',
      change: '+14.6%',
      isPositive: false,
      icon: Clock
    },
  ];

  return (
    <div className="min-h-screen ml-20 bg-gray-900 p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-blue-400/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20">
                <stat.icon size={24} className="text-blue-400" />
              </div>
              <div className={`flex items-center ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                <span className="text-sm">{stat.change}</span>
                {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-blue-200">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-blue-400/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-white font-semibold">Revenue Overview</h2>
            <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
              <MoreVertical size={20} className="text-blue-400" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                <XAxis dataKey="name" stroke="#60A5FA" />
                <YAxis stroke="#60A5FA" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e3a8a',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#white'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-blue-400/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-white font-semibold">Technology Distribution</h2>
            <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
              <MoreVertical size={20} className="text-blue-400" />
            </button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e3a8a',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#white'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-lg backdrop-blur-md bg-white/5 border border-blue-400/20 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white font-semibold">Recent Notifications</h2>
          <span className="p-2 bg-blue-600/20 rounded-full">
            <BellRing size={20} className="text-blue-400" />
          </span>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-blue-600/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${
                  notification.type === 'urgent' ? 'bg-red-400' :
                  notification.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div>
                  <h3 className="text-white font-medium">{notification.title}</h3>
                  <p className="text-blue-200 text-sm">{notification.time}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-blue-600/20 rounded-lg transition-colors">
                <MoreVertical size={20} className="text-blue-400" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.recharts-tooltip-wrapper) {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default DashboardContent;