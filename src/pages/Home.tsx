import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Clock, Activity, TrendingUp, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Projects', value: '12', icon: Activity, color: 'bg-blue-500' },
    { name: 'Active Tasks', value: '24', icon: Clock, color: 'bg-emerald-500' },
    { name: 'Team Members', value: '8', icon: Users, color: 'bg-purple-500' },
    { name: 'Completed', value: '95%', icon: Award, color: 'bg-orange-500' },
  ];

  const recentActivities = [
    { id: 1, action: 'Project "Website Redesign" completed', time: '2 hours ago', type: 'success' },
    { id: 2, action: 'New team member joined', time: '4 hours ago', type: 'info' },
    { id: 3, action: 'Monthly report generated', time: '1 day ago', type: 'info' },
    { id: 4, action: 'Budget milestone reached', time: '2 days ago', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}! 👋
          </h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`h-2 w-2 rounded-full mt-2 ${
                        activity.type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700">Schedule Meeting</span>
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700">View Analytics</span>
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium text-gray-700">Invite Team</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white p-6">
              <h3 className="text-lg font-semibold mb-2">Monthly Progress</h3>
              <p className="text-blue-100 text-sm mb-4">You're doing great! Keep up the momentum.</p>
              <div className="w-full bg-blue-500 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-blue-100 text-sm mt-2">75% Complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;