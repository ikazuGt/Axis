import { motion } from 'framer-motion';
import { FaBook, FaQuestion, FaChartLine, FaClock, FaRocket } from 'react-icons/fa';

const DashboardTab = ({ session }) => {
  // Dashboard stats
  const userStats = {
    completedLessons: 15,
    quizzesTaken: 7,
    averageScore: 83,
    timeSpent: '12h 30m',
  };

  // Recent activity data
  const recentActivity = [
    { type: 'quiz', name: 'JavaScript Basics', result: 'Completed (85%)', date: '2 days ago' },
    { type: 'lesson', name: 'React Components', result: 'Completed', date: '4 days ago' },
    { type: 'lesson', name: 'CSS Grid Layout', result: 'In Progress (75%)', date: '1 week ago' },
  ];

  // Recommended paths
  const recommendedPaths = [
    { 
      title: 'JavaScript Fundamentals', 
      description: 'Master the core concepts of JavaScript',
      progress: 45,
      level: 'Beginner',
    },
    { 
      title: 'React Framework', 
      description: 'Learn component-based UI development',
      progress: 10,
      level: 'Intermediate',
    },
    { 
      title: 'CSS Animations', 
      description: 'Create engaging web animations with CSS',
      progress: 0,
      level: 'Intermediate',
    },
  ];

  return (
    <>
      {/* Welcome Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {session.user.name.split(' ')[0]}!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your learning progress and recommended next steps.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StatCard 
          title="Lessons Completed" 
          value={userStats.completedLessons} 
          icon={<FaBook className="text-sky-500" />}
          delay={0.1}
        />
        <StatCard 
          title="Quizzes Taken" 
          value={userStats.quizzesTaken} 
          icon={<FaQuestion className="text-indigo-500" />}
          delay={0.2}
        />
        <StatCard 
          title="Average Score" 
          value={`${userStats.averageScore}%`} 
          icon={<FaChartLine className="text-green-500" />}
          delay={0.3}
        />
        <StatCard 
          title="Time Spent" 
          value={userStats.timeSpent} 
          icon={<FaClock className="text-amber-500" />}
          delay={0.4}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div 
          className="lg:col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Recent Activity</h2>
          </div>
          <div className="px-6 py-4">
            <ul className="divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <motion.li 
                  key={index} 
                  className="py-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {activity.type === 'quiz' ? (
                        <div className="bg-indigo-100 p-2 rounded-md">
                          <FaQuestion className="text-indigo-500" />
                        </div>
                      ) : (
                        <div className="bg-sky-100 p-2 rounded-md">
                          <FaBook className="text-sky-500" />
                        </div>
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                        <p className="text-xs text-gray-500">{activity.result}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{activity.date}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Recommended Paths */}
        <motion.div 
          className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-gray-900">Recommended Learning Paths</h2>
            <button className="text-sm text-sky-600 hover:text-sky-800">View All</button>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 gap-4">
              {recommendedPaths.map((path, index) => (
                <motion.div 
                  key={index} 
                  className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{path.title}</h3>
                      <p className="text-sm text-gray-600">{path.description}</p>
                    </div>
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
                      {path.level}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300">
                  <FaRocket className="mr-2" />
                  Start New Path
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// Stats card component
function StatCard({ title, value, icon, delay = 0 }) {
  return (
    <motion.div 
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + delay }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </motion.div>
  );
}

export default DashboardTab;