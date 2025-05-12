import { signIn, getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaRobot } from 'react-icons/fa';

export default function Login() {
  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <>
      <Head>
        <title>Sign In - Axis</title>
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-indigo-50 px-4">
        <div className="absolute top-6 left-6">
          <Link href="/" className="flex items-center gap-2">
            <FaRobot className="text-sky-500 text-2xl" />
            <span className="text-xl font-bold text-gray-800">Axis</span>
          </Link>
        </div>
        
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full p-4 shadow-lg">
                <FaRobot size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Axis</h1>
            <p className="text-gray-600">Sign in to start your learning journey</p>
          </div>
          
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium shadow-sm"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>By signing in, you agree to our</p>
            <div className="mt-1 space-x-1">
              <Link href="/terms" className="text-sky-600 hover:text-sky-800">Terms of Service</Link>
              <span>and</span>
              <Link href="/privacy" className="text-sky-600 hover:text-sky-800">Privacy Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
  
  return {
    props: {},
  };
}