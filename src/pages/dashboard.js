import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  FaRobot, 
  FaTachometerAlt, 
  FaBook, 
  FaQuestion, 
  FaCog, 
  FaBars, 
  FaTimes, 
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa';
import { signOut } from 'next-auth/react';

// Tab components
import DashboardTab from '@/components/dashboard/sidebar/DashboardTab';
import LearningTab from '@/components/dashboard/sidebar/LearningTab';
import QuizzesTab from '@/components/dashboard/sidebar/QuizzesTab';
import SettingsTab from '@/components/dashboard/sidebar/SettingsTab';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  // Navigation menu items
  const menuItems = [
    {
      name: 'Dashboard',
      id: 'dashboard',
      icon: <FaTachometerAlt />,
    },
    {
      name: 'Learning Paths',
      id: 'learning-path',
      icon: <FaBook />,
    },
    {
      name: 'Quizzes',
      id: 'quizzes',
      icon: <FaQuestion />,
    },
    {
      name: 'Settings',
      id: 'settings',
      icon: <FaCog />,
    },
  ];

  // Set active tab from URL hash on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const validTabs = menuItems.map(item => item.id);
      
      if (hash && validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        // If no hash, set URL to default tab
        window.location.hash = 'dashboard';
      }

      // Listen for hash changes
      const handleHashChange = () => {
        const newHash = window.location.hash.replace('#', '');
        if (validTabs.includes(newHash)) {
          setActiveTab(newHash);
        }
      };

      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  // Update hash when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    setSidebarOpen(false);
  };

  // Get the title for the current tab
  const getActiveTabTitle = () => {
    const activeItem = menuItems.find(item => item.id === activeTab);
    return activeItem ? activeItem.name : 'Dashboard';
  };

  // Redirect to login if not authenticated
  if (status === 'unauthenticated') {
    router.replace('/auth/signin');
    return null;
  }

  if (!session) {
    return null;
  }

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab session={session} />;
      case 'learning-path':
        return <LearningTab />;
      case 'quizzes':
        return <QuizzesTab />;
      case 'settings':
        return <SettingsTab session={session} />;
      default:
        return <DashboardTab session={session} />;
    }
  };

  return (
    <>
      <Head>
        <title>{getActiveTabTitle()} - Axis Learning</title>
      </Head>

      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar for desktop */}
        <div className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="flex items-center h-16 px-4 border-b border-gray-200">
              <Link href="/" className="flex items-center space-x-2">
                <FaRobot className="text-sky-500 text-xl" />
                <span className="text-xl font-bold text-gray-800">Axis</span>
              </Link>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  } group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 w-full text-left`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200"
              >
                <FaSignOutAlt className="mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="md:hidden fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-gray-600 bg-opacity-75" 
                onClick={() => setSidebarOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div
                className="relative flex-1 flex flex-col max-w-xs w-full bg-white"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FaTimes className="h-6 w-6 text-white" />
                  </button>
                </div>
                <div className="flex items-center h-16 px-4 border-b border-gray-200">
                  <Link href="/" className="flex items-center space-x-2">
                    <FaRobot className="text-sky-500 text-xl" />
                    <span className="text-xl font-bold text-gray-800">Axis</span>
                  </Link>
                </div>
                <div className="flex-1 h-0 overflow-y-auto">
                  <nav className="p-4 space-y-1">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleTabChange(item.id)}
                        className={`${
                          activeTab === item.id
                            ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        } group flex items-center px-4 py-3 text-base font-medium rounded-md transition-all duration-200 w-full text-left`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-200"
                  >
                    <FaSignOutAlt className="mr-3" />
                    Sign Out
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* Top navbar */}
          <div className="bg-white shadow-sm z-10">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <button
                className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <FaBars className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <h1 className="text-lg md:text-xl font-bold text-gray-900 md:block hidden">{getActiveTabTitle()}</h1>
              </div>
              <div className="flex items-center">
                {isLoading ? (
                  <div className="animate-pulse h-10 w-10 rounded-full bg-gray-200"></div>
                ) : session && (
                  <button onClick={() => handleTabChange('settings')} className="flex items-center space-x-3">
                    <div className="flex flex-col text-right mr-3 hidden sm:block">
                      <span className="text-sm font-medium text-gray-900">{session.user.name}</span>
                      <span className="text-xs text-gray-500">{session.user.email}</span>
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-white">
                      {session.user?.image ? (
                        <Image 
                          src={session.user.image} 
                          alt={session.user.name} 
                          fill 
                          className="object-cover" 
                        />
                      ) : (
                        <FaUser className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {renderTabContent()}
                </motion.div>
              </AnimatePresence>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

// Add server-side protection
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}