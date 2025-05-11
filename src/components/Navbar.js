import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" }
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
          {/* Custom styles for the moving gradient border */}
          <style jsx global>{`
              /* Moving gradient border animation for active nav link */
              .nav-link {
                  position: relative;
                  transition: color 0.3s ease;
              }

              .nav-link::after {
                  content: '';
                  position: absolute;
                  bottom: -4px;
                  left: 0;
                  width: 0;
                  height: 2px;
                  background: transparent;
                  transition: width 0.3s ease;
              }

              .nav-link:hover::after {
                  width: 100%;
                  background: #bae6fd; /* sky-200 */
              }

              .nav-link.active::after {
                  width: 100%;
                  background: linear-gradient(
                      90deg,
                      #bae6fd,
                      /* sky-200 */ #7dd3fc,
                      /* sky-300 */ #38bdf8,
                      /* sky-400 */ #0ea5e9,
                      /* sky-500 */ #38bdf8,
                      /* sky-400 */ #7dd3fc,
                      /* sky-300 */ #bae6fd /* sky-200 */
                  );
                  background-size: 200% 100%;
                  animation: gradientMove 3s linear infinite;
              }

              @keyframes gradientMove {
                  0% {
                      background-position: 0% 50%;
                  }
                  50% {
                      background-position: 100% 50%;
                  }
                  100% {
                      background-position: 0% 50%;
                  }
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

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1">
                  <ul className="flex gap-8 list-none p-0 m-0">
                      {navItems.map((item, index) => (
                          <li key={index}>
                              <Link
                                  href={item.href}
                                  className={`nav-link text-gray-700 hover:text-sky-600 font-medium py-2 px-3 ${
                                      activeIndex === index
                                          ? 'active text-sky-600'
                                          : ''
                                  }`}
                              >
                                  {item.label}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Auth Status for Desktop */}
              <div className="hidden md:block z-30">
                  {isLoading ? (
                      // Loading skeleton
                      <div className="bg-gray-200 animate-pulse w-24 h-10 rounded-md"></div>
                  ) : session ? (
                      // User is logged in - Show profile
                      <div className="relative">
                          <button
                              onClick={() => setShowUserMenu(!showUserMenu)}
                              className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                          >
                              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                                  {session.user?.image ? (
                                      <Image
                                          src={session.user.image}
                                          alt={session.user.name}
                                          fill
                                          className="object-cover"
                                      />
                                  ) : (
                                      session.user.name?.charAt(0)
                                  )}
                              </div>
                              <span className="text-gray-800 font-medium hidden lg:block">
                                  {session.user.name?.split(' ')[0]}
                              </span>
                              <MdOutlineArrowDropDown
                                  className={`text-gray-600 transition-transform ${
                                      showUserMenu ? 'rotate-180' : ''
                                  }`}
                              />
                          </button>

                          <AnimatePresence>
                              {showUserMenu && (
                                  <motion.div
                                      initial={{
                                          opacity: 0,
                                          scale: 0.95,
                                          y: 10,
                                      }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50"
                                  >
                                      <Link
                                          href="/dashboard"
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                          Dashboard
                                      </Link>
                                      <Link
                                          href="/profile"
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                          Profile Settings
                                      </Link>
                                      <button
                                          onClick={() =>
                                              signOut({ callbackUrl: '/' })
                                          }
                                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                      >
                                          Sign Out
                                      </button>
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  ) : (
                      // User is not logged in - Show login button
                      <Link
                          href="/auth/login"
                          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-md hover:shadow-lg transition-all duration-300 font-medium"
                      >
                          Sign In
                      </Link>
                  )}
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

          {/* Mobile Menu */}
          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                      }}
                      className="md:hidden fixed left-5 right-5 bottom-5 z-50"
                  >
                      <div className="relative">
                          {/* Enhanced backdrop blur and shadow effects */}
                          <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20"></div>

                          <div className="relative flex flex-col py-5 px-6 space-y-4 rounded-2xl overflow-hidden">
                              {/* Menu items */}
                              {navItems.map((item, index) => (
                                  <Link
                                      key={index}
                                      href={item.href}
                                      className={`nav-link text-gray-800 hover:text-sky-500 py-2.5 px-4 font-medium transition-all ${
                                          activeIndex === index ? 'active' : ''
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                  >
                                      {item.label}
                                  </Link>
                              ))}

                              {/* Auth Status for Mobile */}
                              <div className="pt-4 border-t border-gray-100">
                                  {isLoading ? (
                                      <div className="bg-gray-200 animate-pulse w-full h-12 rounded-lg"></div>
                                  ) : session ? (
                                      <>
                                          <div className="flex items-center gap-3 px-4 py-2">
                                              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                                                  {session.user?.image ? (
                                                      <Image
                                                          src={
                                                              session.user.image
                                                          }
                                                          alt={
                                                              session.user.name
                                                          }
                                                          fill
                                                          className="object-cover"
                                                      />
                                                  ) : (
                                                      session.user.name?.charAt(
                                                          0,
                                                      )
                                                  )}
                                              </div>
                                              <div className="flex-1">
                                                  <p className="text-gray-800 font-medium">
                                                      {session.user.name}
                                                  </p>
                                                  <p className="text-gray-500 text-sm">
                                                      {session.user.email}
                                                  </p>
                                              </div>
                                          </div>
                                          <Link
                                              href="/dashboard"
                                              className="block bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium py-3 px-4 mt-3 text-center"
                                              onClick={() => setIsOpen(false)}
                                          >
                                              Dashboard
                                          </Link>
                                          <button
                                              onClick={() => {
                                                  signOut({ callbackUrl: '/' });
                                                  setIsOpen(false);
                                              }}
                                              className="w-full mt-2 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-all font-medium"
                                          >
                                              Sign Out
                                          </button>
                                      </>
                                  ) : (
                                      <Link
                                          href="/auth/login"
                                          className="block bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium py-3 px-4 text-center"
                                          onClick={() => setIsOpen(false)}
                                      >
                                          Sign In
                                      </Link>
                                  )}
                              </div>
                          </div>
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </nav>
  );
};

export default Navbar;