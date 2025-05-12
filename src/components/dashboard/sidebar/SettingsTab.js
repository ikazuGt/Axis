import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBell, FaLock, FaDesktop, FaSave } from 'react-icons/fa';

const SettingsTab = ({ session }) => {
  const [activeSection, setActiveSection] = useState('profile');
  
  // Profile form state
  const [profileData, setProfileData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    bio: 'Frontend developer passionate about React and design systems.',
    timezone: 'UTC+0',
  });
  
  // Notification settings
  const [notifications, setNotifications] = useState({
    email_updates: true,
    quiz_reminders: true,
    learning_progress: false,
    new_courses: true
  });
  
  // Theme preferences
  const [preferences, setPreferences] = useState({
    dark_mode: false,
    compact_view: false,
    animations: true,
  });

  // Handle profile data change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };
  
  // Handle toggle changes
  const handleToggleChange = (settingType, setting) => {
    if (settingType === 'notifications') {
      setNotifications({
        ...notifications,
        [setting]: !notifications[setting]
      });
    } else if (settingType === 'preferences') {
      setPreferences({
        ...preferences,
        [setting]: !preferences[setting]
      });
    }
  };
  
  return (
    <>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage your account preferences and settings
        </p>
      </motion.div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Settings sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100">
            <nav className="p-4">
              {[
                { id: 'profile', label: 'Profile', icon: <FaUser /> },
                { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
                { id: 'password', label: 'Password', icon: <FaLock /> },
                { id: 'preferences', label: 'Preferences', icon: <FaDesktop /> },
              ].map((section) => (
                <button 
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`${
                    activeSection === section.id
                      ? 'bg-sky-50 text-sky-600'
                      : 'hover:bg-gray-50 text-gray-600'
                  } flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 mb-1`}
                >
                  <span className="mr-3">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Settings content */}
          <div className="flex-1 p-6">
            <AnimatedSettingsSection active={activeSection === 'profile'}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={profileData.timezone}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="UTC-12">UTC-12</option>
                    <option value="UTC-11">UTC-11</option>
                    <option value="UTC-10">UTC-10</option>
                    <option value="UTC-9">UTC-9</option>
                    <option value="UTC-8">UTC-8</option>
                    <option value="UTC-7">UTC-7</option>
                    <option value="UTC-6">UTC-6</option>
                    <option value="UTC-5">UTC-5</option>
                    <option value="UTC-4">UTC-4</option>
                    <option value="UTC-3">UTC-3</option>
                    <option value="UTC-2">UTC-2</option>
                    <option value="UTC-1">UTC-1</option>
                    <option value="UTC+0">UTC+0</option>
                    <option value="UTC+1">UTC+1</option>
                    <option value="UTC+2">UTC+2</option>
                    <option value="UTC+3">UTC+3</option>
                    <option value="UTC+4">UTC+4</option>
                    <option value="UTC+5">UTC+5</option>
                    <option value="UTC+6">UTC+6</option>
                    <option value="UTC+7">UTC+7</option>
                    <option value="UTC+8">UTC+8</option>
                    <option value="UTC+9">UTC+9</option>
                    <option value="UTC+10">UTC+10</option>
                    <option value="UTC+11">UTC+11</option>
                    <option value="UTC+12">UTC+12</option>
                  </select>
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300">
                    <FaSave className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </AnimatedSettingsSection>
            
            <AnimatedSettingsSection active={activeSection === 'notifications'}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Notification Settings</h2>
              <div className="space-y-4">
                {[
                  { id: 'email_updates', label: 'Email Updates', description: 'Receive important announcements and account information' },
                  { id: 'quiz_reminders', label: 'Quiz Reminders', description: 'Get reminded about quiz deadlines and new quizzes' },
                  { id: 'learning_progress', label: 'Learning Progress', description: 'Weekly summary of your learning progress' },
                  { id: 'new_courses', label: 'New Content Alerts', description: 'Get notified when new courses or content are added' },
                ].map((setting) => (
                  <div key={setting.id} className="flex items-start justify-between p-4 border border-gray-100 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{setting.label}</h3>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="relative inline-block w-12 align-middle select-none">
                      <input 
                        type="checkbox" 
                        id={setting.id}
                        checked={notifications[setting.id]} 
                        onChange={() => handleToggleChange('notifications', setting.id)}
                        className="opacity-0 absolute h-0 w-0"
                      />
                      <label 
                        htmlFor={setting.id}
                        className={`${
                          notifications[setting.id] ? 'bg-sky-500' : 'bg-gray-200'
                        } block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200`}
                      >
                        <span 
                          className={`${
                            notifications[setting.id] ? 'translate-x-6' : 'translate-x-0'
                          } inline-block w-6 h-6 transform bg-white rounded-full shadow transition-transform duration-200`}
                        ></span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSettingsSection>
            
            <AnimatedSettingsSection active={activeSection === 'password'}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="current_password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    id="current_password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="new_password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input
                    type="password"
                    id="new_password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300">
                    <FaLock className="mr-2" />
                    Update Password
                  </button>
                </div>
              </div>
            </AnimatedSettingsSection>
            
            <AnimatedSettingsSection active={activeSection === 'preferences'}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Interface Preferences</h2>
              <div className="space-y-4">
                {[
                  { id: 'dark_mode', label: 'Dark Mode', description: 'Enable dark theme for the interface' },
                  { id: 'compact_view', label: 'Compact View', description: 'Show more content with less spacing' },
                  { id: 'animations', label: 'Interface Animations', description: 'Enable animations throughout the interface' },
                ].map((setting) => (
                  <div key={setting.id} className="flex items-start justify-between p-4 border border-gray-100 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{setting.label}</h3>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="relative inline-block w-12 align-middle select-none">
                      <input 
                        type="checkbox" 
                        id={setting.id}
                        checked={preferences[setting.id]} 
                        onChange={() => handleToggleChange('preferences', setting.id)}
                        className="opacity-0 absolute h-0 w-0"
                      />
                      <label 
                        htmlFor={setting.id}
                        className={`${
                          preferences[setting.id] ? 'bg-sky-500' : 'bg-gray-200'
                        } block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200`}
                      >
                        <span 
                          className={`${
                            preferences[setting.id] ? 'translate-x-6' : 'translate-x-0'
                          } inline-block w-6 h-6 transform bg-white rounded-full shadow transition-transform duration-200`}
                        ></span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSettingsSection>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper component for animated content sections
const AnimatedSettingsSection = ({ active, children }) => {
  if (!active) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default SettingsTab;