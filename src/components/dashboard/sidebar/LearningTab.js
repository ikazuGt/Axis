import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaChartLine, FaFilter, FaClock, FaStar } from 'react-icons/fa';

const LearningTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Learning path categories
  const categories = [
    { id: 'all', name: 'All Paths' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'devops', name: 'DevOps' },
  ];
  
  // Learning paths data
  const allLearningPaths = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Master core JavaScript concepts and modern ES6+ features',
      category: 'frontend',
      totalLessons: 24,
      completedLessons: 18,
      estimatedHours: 12,
      difficulty: 'Beginner',
      image: '/path-javascript.png',
      popular: true,
    },
    {
      id: 2,
      title: 'React Framework Mastery',
      description: 'Build powerful single-page applications with React',
      category: 'frontend',
      totalLessons: 32,
      completedLessons: 8,
      estimatedHours: 18,
      difficulty: 'Intermediate',
      image: '/path-react.png',
      popular: true,
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      description: 'Create scalable backend services with Node.js',
      category: 'backend',
      totalLessons: 28,
      completedLessons: 0,
      estimatedHours: 16,
      difficulty: 'Intermediate',
      image: '/path-nodejs.png',
      popular: false,
    },
    {
      id: 4,
      title: 'CSS Layouts & Animations',
      description: 'Master CSS Grid, Flexbox and advanced animations',
      category: 'frontend',
      totalLessons: 20,
      completedLessons: 12,
      estimatedHours: 10,
      difficulty: 'Beginner',
      image: '/path-css.png',
      popular: false,
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      description: 'Learn practical design skills for developers',
      category: 'design',
      totalLessons: 16,
      completedLessons: 0,
      estimatedHours: 8,
      difficulty: 'Beginner',
      image: '/path-uiux.png',
      popular: false,
    },
    {
      id: 6,
      title: 'Docker & Kubernetes',
      description: 'Container orchestration for modern applications',
      category: 'devops',
      totalLessons: 22,
      completedLessons: 0,
      estimatedHours: 14,
      difficulty: 'Advanced',
      image: '/path-docker.png',
      popular: true,
    }
  ];

  // Filter learning paths by active category
  const filteredPaths = activeCategory === 'all' 
    ? allLearningPaths 
    : allLearningPaths.filter(path => path.category === activeCategory);
  
  // Get in-progress paths
  const inProgressPaths = allLearningPaths.filter(
    path => path.completedLessons > 0 && path.completedLessons < path.totalLessons
  );
  
  // Calculate overall progress across all paths
  const calculateOverallProgress = () => {
    const totalLessons = allLearningPaths.reduce((total, path) => total + path.totalLessons, 0);
    const completedLessons = allLearningPaths.reduce((total, path) => total + path.completedLessons, 0);
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  return (
    <>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Learning Paths</h1>
        <p className="text-gray-600">
          Structured learning paths to help you master new skills step by step.
        </p>
      </motion.div>

      {/* Learning progress */}
      <motion.div 
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Your Learning Progress</h2>
            <p className="text-sm text-gray-600">Track your journey across all learning paths</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="font-bold text-xl text-gray-900">{calculateOverallProgress()}%</span>
            <span className="text-sm text-gray-500 ml-2">Complete</span>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
          <div 
            className="bg-gradient-to-r from-sky-500 to-indigo-500 h-3 rounded-full" 
            style={{ width: `${calculateOverallProgress()}%` }}
          ></div>
        </div>
        
        {inProgressPaths.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Continue Learning</h3>
            <div className="space-y-4">
              {inProgressPaths.map((path, index) => (
                <motion.div 
                  key={path.id}
                  className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{path.title}</h4>
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
                      {path.completedLessons} / {path.totalLessons} lessons
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" 
                      style={{ width: `${(path.completedLessons / path.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button className="px-4 py-1.5 bg-sky-50 text-sky-600 rounded-lg text-sm font-medium hover:bg-sky-100 transition-colors">
                      Continue
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Category filters */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Learning paths grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredPaths.map((path, index) => (
          <motion.div
            key={path.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
          >
            <div className="h-36 bg-gradient-to-r from-sky-500 to-indigo-500 relative">
              {path.popular && (
                <span className="absolute top-2 right-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <FaStar className="mr-1" /> Popular
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-gray-900">{path.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  path.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-700' 
                    : path.difficulty === 'Intermediate'
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-amber-100 text-amber-700'
                }`}>
                  {path.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{path.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <FaBook className="mr-1 text-sky-500" />
                  <span>{path.totalLessons} Lessons</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1 text-indigo-500" />
                  <span>{path.estimatedHours} Hours</span>
                </div>
              </div>
              {path.completedLessons > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{Math.round((path.completedLessons / path.totalLessons) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" 
                      style={{ width: `${(path.completedLessons / path.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              <button className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                path.completedLessons > 0 && path.completedLessons < path.totalLessons
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:shadow-lg'
                  : 'bg-white border border-sky-500 text-sky-600 hover:bg-sky-50'
              }`}>
                {path.completedLessons === 0 
                  ? 'Start Learning' 
                  : path.completedLessons === path.totalLessons 
                    ? 'Review Course' 
                    : 'Continue Learning'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* No results */}
      {filteredPaths.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
            <FaFilter className="text-gray-400 text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No learning paths found</h3>
          <p className="text-gray-600 mb-4">Try selecting a different category</p>
          <button 
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            View All Paths
          </button>
        </motion.div>
      )}
    </>
  );
};

export default LearningTab;