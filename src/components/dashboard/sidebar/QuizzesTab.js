import { motion } from 'framer-motion';
import { FaQuestion, FaCode, FaClock, FaArrowRight } from 'react-icons/fa';

const QuizzesTab = () => {
  // Sample quizzes data
  const quizzes = [
    {
      id: 1,
      title: 'JavaScript Fundamentals Quiz',
      description: 'Test your knowledge of JavaScript basics',
      totalQuestions: 20,
      estimatedTime: '15 min',
      difficulty: 'Beginner',
      completed: true,
      score: 85,
    },
    {
      id: 2,
      title: 'React Components & Props',
      description: 'Challenge yourself on React component patterns',
      totalQuestions: 15,
      estimatedTime: '12 min',
      difficulty: 'Intermediate',
      completed: false,
      score: null,
    },
    {
      id: 3,
      title: 'CSS Grid & Flexbox',
      description: 'Test your layout skills with modern CSS',
      totalQuestions: 18,
      estimatedTime: '14 min',
      difficulty: 'Intermediate',
      completed: false,
      score: null,
    },
    {
      id: 4,
      title: 'Frontend Performance Optimization',
      description: 'Advanced techniques for optimizing web applications',
      totalQuestions: 25,
      estimatedTime: '20 min',
      difficulty: 'Advanced',
      completed: false,
      score: null,
    }
  ];

  return (
    <>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Quizzes</h1>
        <p className="text-gray-600">
          Test your knowledge and track your progress with our interactive quizzes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz, index) => (
          <motion.div 
            key={quiz.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="px-6 py-5 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <h2 className="font-bold text-gray-900">{quiz.title}</h2>
                <span className={`text-xs px-2 py-1 rounded ${
                  quiz.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-700' 
                    : quiz.difficulty === 'Intermediate'
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-amber-100 text-amber-700'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{quiz.description}</p>
            </div>
            
            <div className="px-6 py-4">
              <div className="flex justify-between text-sm mb-4">
                <div className="flex items-center">
                  <FaQuestion className="text-indigo-500 mr-2" />
                  <span className="text-gray-700">{quiz.totalQuestions} questions</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-sky-500 mr-2" />
                  <span className="text-gray-700">{quiz.estimatedTime}</span>
                </div>
              </div>
              
              {quiz.completed ? (
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Score</span>
                    <span>{quiz.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" 
                      style={{ width: `${quiz.score}%` }}
                    ></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Review Results
                    </button>
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Retry
                    </button>
                  </div>
                </div>
              ) : (
                <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  Start Quiz <FaArrowRight className="ml-2" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default QuizzesTab;