import Link from 'next/link';
import { FaRobot, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaRobot className="text-sky-500 text-2xl" />
              <span className="text-xl font-bold text-gray-800">Axis</span>
            </div>
            <p className="text-gray-600 text-sm">
              Axioo Educative Learning Service - Learn programming with AI assistance
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-600 hover:text-sky-500 text-sm">Features</Link></li>
              <li><Link href="#roadmaps" className="text-gray-600 hover:text-sky-500 text-sm">Roadmaps</Link></li>
              <li><Link href="#quizzes" className="text-gray-600 hover:text-sky-500 text-sm">Quizzes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#docs" className="text-gray-600 hover:text-sky-500 text-sm">Documentation</Link></li>
              <li><Link href="#blog" className="text-gray-600 hover:text-sky-500 text-sm">Blog</Link></li>
              <li><Link href="#help" className="text-gray-600 hover:text-sky-500 text-sm">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-600 hover:text-sky-500 text-sm">About</Link></li>
              <li><Link href="#privacy" className="text-gray-600 hover:text-sky-500 text-sm">Privacy</Link></li>
              <li><Link href="#terms" className="text-gray-600 hover:text-sky-500 text-sm">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Axis. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-sky-500"><FaTwitter size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-sky-500"><FaGithub size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-sky-500"><FaLinkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;