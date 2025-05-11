import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';
import GooeyNav from '@/components/Reactbits/GooeyNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Get Started", href: "#get-started" }
  ];
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.querySelector(item.href)
      ).filter(Boolean);
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveIndex(i);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-md shadow-sm z-50">
      {/* Custom styles to override GooeyNav default styling */}
      <style jsx global>{`
        /* Override background to light blue */
        .effect.filter::before {
          background: rgba(240, 249, 255, 0.75) !important; /* Light blue background */
        }
        
        .effect.filter::after {
          background: rgba(224, 242, 254, 0.9) !important; /* Slightly darker light blue */
        }
        
        /* Text color for navigation items */
        .effect.text {
          color: #0284c7 !important; /* sky-600 */
        }
        
        /* Reset text shadows and colors */
        nav ul {
          color: #0369a1 !important; /* sky-700 */
          text-shadow: none !important;
        }
        
        /* Active state */
        li.active {
          color: #0ea5e9 !important; /* sky-500 */
        }
        
        li::after {
          background: #e0f2fe !important; /* sky-100 */
        }
        
        /* Adjust particle colors */
        :root {
          --color-1: #7dd3fc; /* sky-300 */
          --color-2: #38bdf8; /* sky-400 */
          --color-3: #0ea5e9; /* sky-500 */
          --color-4: #0284c7; /* sky-600 */
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-30">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaRobot className="text-sky-500 text-2xl" />
          </motion.div>
          <span className="text-xl font-bold text-gray-800">Axis</span>
        </Link>

        {/* Desktop Navigation with GooeyNav - Fixed positioning and width */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="relative" style={{ height: '60px' }}>
            <GooeyNav
              items={navItems.slice(0, 3)} 
              particleCount={12}
              particleDistances={[80, 10]}
              particleR={20} /* Reduced for subtlety */
              initialActiveIndex={activeIndex < 3 ? activeIndex : 0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 4]} /* Using our custom color variables */
            />
          </div>
        </div>

        {/* CTA Button for Desktop - Keep this separate from GooeyNav */}
        <div className="hidden md:block z-30">
          <Link 
            href="#get-started" 
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-md hover:shadow-lg transition-all duration-300 font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-30">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-2 hover:shadow-md transition-all"
          >
            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Improved Floating Style with Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed left-5 right-5 bottom-5 z-50"
          >
            <div className="relative">
              {/* Enhanced backdrop blur and shadow effects */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20"></div>
              
              <div className="relative flex flex-col py-5 px-6 space-y-4 rounded-2xl overflow-hidden">
                {/* Menu items with improved styling */}
                {navItems.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href} 
                    className={`${
                      index === navItems.length - 1 
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:text-white' 
                        : 'text-gray-800 hover:text-sky-500'
                    } py-2.5 px-4 font-medium transition-all flex items-center justify-between`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    {index === navItems.length - 1 && (
                      <motion.span 
                        initial={{ x: 0 }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatDelay: 1.5,
                          duration: 0.8
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;