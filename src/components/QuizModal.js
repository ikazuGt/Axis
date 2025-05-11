import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRocket } from "react-icons/fa";
import Router from "next/router";

const QuizModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real app, you might save user information here
    try {
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to the learning page
      Router.push("/learn");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-md relative z-10 overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="py-8 px-8">
              <div className="mb-6 flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full mb-4">
                  <FaRocket className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started!</h3>
                <p className="text-gray-600 text-center">
                  Enter your details to begin your learning journey
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                      required
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-3 rounded-lg font-medium mt-2 
                      ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-md"}`}
                  >
                    {isSubmitting ? "Processing..." : "Start My Learning Journey"}
                  </motion.button>
                </div>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-6">
                By continuing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;