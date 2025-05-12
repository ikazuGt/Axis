import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FaRocket,
    FaRobot,
    FaCode,
    FaChartLine,
    FaPuzzlePiece,
    FaArrowRight,
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Axis - Learn Programming with AI</title>
                <meta
                    name="description"
                    content="Axioo Educative Learning Service - Learn programming through AI-guided roadmaps and quizzes"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />

                <main className="flex-grow">
                    {/* Hero Section with unique geometric style */}
                    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                        {/* Stylized geometric background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50 z-0">
                            {/* Abstract geometric shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-70 overflow-hidden">
                                <svg
                                    viewBox="0 0 400 400"
                                    className="absolute top-0 right-0 h-full w-full"
                                    preserveAspectRatio="xMaxYMin slice"
                                >
                                    <defs>
                                        <linearGradient
                                            id="grad1"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#38bdf8"
                                                stopOpacity="0.1"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#818cf8"
                                                stopOpacity="0.1"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <rect
                                        x="50"
                                        y="50"
                                        width="300"
                                        height="300"
                                        rx="40"
                                        fill="url(#grad1)"
                                    />
                                    <circle
                                        cx="350"
                                        cy="150"
                                        r="40"
                                        fill="#38bdf8"
                                        fillOpacity="0.08"
                                    />
                                    <circle
                                        cx="100"
                                        cy="300"
                                        r="80"
                                        fill="#818cf8"
                                        fillOpacity="0.05"
                                    />
                                    <path
                                        d="M200,50 L350,200 L200,350 L50,200 Z"
                                        fill="white"
                                        fillOpacity="0.05"
                                    />
                                </svg>
                            </div>

                            {/* Subtle grid pattern */}
                            {/* <div className="absolute inset-0 opacity-5">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div> */}
                        </div>

                        {/* Floating animated elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute rounded-full ${
                                        i % 2 === 0
                                            ? 'bg-sky-300'
                                            : 'bg-indigo-300'
                                    }`}
                                    style={{
                                        width: `${Math.random() * 10 + 5}px`,
                                        height: `${Math.random() * 10 + 5}px`,
                                    }}
                                    initial={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: 0.2,
                                    }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: [0.1, 0.3, 0.1],
                                    }}
                                    transition={{
                                        duration: Math.random() * 15 + 10,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        ease: 'easeInOut',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="max-w-7xl mx-auto relative z-10">
                            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                                <div className="md:col-span-3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: 'easeOut',
                                        }}
                                    >
                                        {/* Badge with animation */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.3,
                                                duration: 0.5,
                                            }}
                                            className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 px-4 py-2 rounded-full"
                                        >
                                            <span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
                                            <span className="text-sm font-medium bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                                                AI-Powered Learning
                                            </span>
                                        </motion.div>

                                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                                            Learn to Code with{' '}
                                            <br className="hidden sm:block" />
                                            <span className="relative">
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                                                    AI Guidance
                                                </span>
                                                {/* <motion.svg
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            delay: 1,
                            duration: 1.5,
                            ease: "easeInOut",
                          }}
                          className="absolute -bottom-2 left-0 w-full h-3 overflow-visible stroke-sky-200"
                          width="100%"
                          height="100%"
                          viewBox="0 0 100 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,5 Q25,0 50,5 T100,5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </motion.svg> */}
                                            </span>
                                        </h1>

                                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                                            Axis helps you master programming
                                            through personalized AI roadmaps,
                                            interactive learning, and
                                            knowledge-testing quizzes.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                                            <motion.button
                                                onClick={() =>
                                                    setShowQuizModal(true)
                                                }
                                                className="group bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-3.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center w-full sm:w-auto"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Start Learning
                                                <motion.span
                                                    className="inline-flex items-center justify-center ml-2"
                                                    initial={{ x: 0 }}
                                                    whileHover={{ x: 3 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 400,
                                                    }}
                                                >
                                                    <FaArrowRight />
                                                </motion.span>
                                            </motion.button>

                                            <motion.a
                                                href="#how-it-works"
                                                className="flex items-center justify-center px-8 py-3.5 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-gray-200 text-gray-700 w-full sm:w-auto"
                                                whileHover={{
                                                    backgroundColor:
                                                        'rgba(240, 249, 255, 0.7)',
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                How It Works
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.2,
                                        ease: 'easeOut',
                                    }}
                                    className="md:col-span-2 relative aspect-square max-h-[450px]"
                                >
                                    {/* 3D-like layered card effect */}
                                    <div className="relative h-full w-full">
                                        {/* Decorative shadows */}
                                        <div className="absolute -right-4 -bottom-4 w-full h-full rounded-2xl bg-indigo-200 opacity-20"></div>
                                        <div className="absolute -left-2 -top-2 w-full h-full rounded-2xl bg-sky-200 opacity-20"></div>

                                        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-white/20 to-sky-50/20 border border-gray-100 shadow-xl">
                                            {/* Image background */}
                                            <div className="absolute inset-0 z-0">
                                                <Image
                                                    src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    alt="Programming code on screen"
                                                    fill
                                                    priority
                                                    className="object-cover rounded-2xl opacity-40"
                                                    style={{
                                                        objectPosition:
                                                            'center',
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-sky-50/60"></div>
                                            </div>

                                            {/* Abstract pattern overlay */}
                                            <div className="absolute inset-0 opacity-10 z-10">
                                                {[...Array(8)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`absolute bg-gradient-to-r ${
                                                            i % 2 === 0
                                                                ? 'from-sky-500 to-sky-400'
                                                                : 'from-indigo-500 to-indigo-400'
                                                        }`}
                                                        style={{
                                                            top: `${
                                                                Math.random() *
                                                                100
                                                            }%`,
                                                            left: `${
                                                                Math.random() *
                                                                100
                                                            }%`,
                                                            width: `${
                                                                Math.random() *
                                                                    40 +
                                                                10
                                                            }px`,
                                                            height: '1px',
                                                            transform: `rotate(${
                                                                Math.random() *
                                                                360
                                                            }deg)`,
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>

                                            {/* Content */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-20">
                                                <div className="z-10 flex flex-col items-center">
                                                    {/* Robot icon with animation */}
                                                    <motion.div
                                                        initial={{ scale: 0.8 }}
                                                        animate={{
                                                            scale: [
                                                                0.8, 1.05, 1,
                                                            ],
                                                            rotate: [
                                                                0, -5, 0, 5, 0,
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 2.5,
                                                            delay: 0.5,
                                                            repeat: Infinity,
                                                            repeatType:
                                                                'reverse',
                                                            repeatDelay: 8,
                                                            ease: 'easeInOut',
                                                        }}
                                                        className="mb-6 rounded-full bg-gradient-to-br from-sky-100 to-indigo-50 p-5 shadow-inner"
                                                    >
                                                        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full p-2 shadow-lg">
                                                            <FaRobot
                                                                size={48}
                                                                className="text-white"
                                                            />
                                                        </div>
                                                    </motion.div>

                                                    <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-indigo-800">
                                                        AI Programming Assistant
                                                    </span>

                                                    <p className="text-gray-600 mt-4 text-center max-w-xs backdrop-blur-sm bg-white/30 p-2 rounded-lg">
                                                        Chat with our AI to
                                                        create personalized
                                                        learning paths tailored
                                                        to your goals
                                                    </p>

                                                    {/* Code snippets with background adjustment */}
                                                    <motion.div
                                                        className="absolute top-8 -right-6 max-w-[160px] bg-white/90 backdrop-blur-sm p-2 rounded border border-gray-100 shadow-md transform rotate-6"
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: 1.2,
                                                            duration: 0.5,
                                                        }}
                                                    >
                                                        <pre className="text-xs text-gray-800 overflow-hidden">
                                                            <code className="font-mono">{`function learn() {\n  const path = AI.create();\n  return success;\n}`}</code>
                                                        </pre>
                                                    </motion.div>

                                                    <motion.div
                                                        className="absolute bottom-8 -left-6 max-w-[160px] bg-white/90 backdrop-blur-sm p-2 rounded border border-gray-100 shadow-md transform -rotate-3"
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay: 1.5,
                                                            duration: 0.5,
                                                        }}
                                                    >
                                                        <pre className="text-xs text-gray-800 overflow-hidden">
                                                            <code className="font-mono">{`const quiz = new Quiz();\nquiz.start();\n// Test your skills!`}</code>
                                                        </pre>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Modern wave separator */}
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                            <svg
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                className="w-full h-[100px] text-white"
                            >
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.61,82.31,321.39,56.44Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="py-24 px-6 relative">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <motion.span
                                    className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    FEATURES
                                </motion.span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    How Axis Helps You Learn
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Our AI-powered platform makes learning
                                    programming concepts intuitive and
                                    personalized.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: (
                                            <FaRocket
                                                className="text-sky-500"
                                                size={28}
                                            />
                                        ),
                                        title: 'Personalized Roadmaps',
                                        description:
                                            'Get customized learning paths based on your goals and current skill level.',
                                    },
                                    {
                                        icon: (
                                            <BsChatDots
                                                className="text-sky-500"
                                                size={28}
                                            />
                                        ),
                                        title: 'AI Chat Assistance',
                                        description:
                                            'Ask questions and receive instant guidance from our programming AI assistant.',
                                    },
                                    {
                                        icon: (
                                            <FaPuzzlePiece
                                                className="text-sky-500"
                                                size={28}
                                            />
                                        ),
                                        title: 'Interactive Quizzes',
                                        description:
                                            'Test your knowledge with quizzes that adapt to your learning progress.',
                                    },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow:
                                                '0 15px 30px -5px rgba(0, 0, 0, 0.1)',
                                        }}
                                        className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-sky-100 transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center mb-6">
                                            <div className="text-gradient-sky">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Wave separator */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 120"
                                className="w-full h-[60px]"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,32C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    fill="#f9fafb"
                                />
                            </svg>
                        </div>
                    </section>

                    {/* How It Works Section - With improved design and arrows */}
                    <section
                        id="how-it-works"
                        className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative"
                    >
                        {/* Subtle background patterns */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute h-40 w-40 rounded-full bg-sky-100 top-20 left-[10%] blur-3xl"></div>
                            <div className="absolute h-40 w-40 rounded-full bg-indigo-100 bottom-20 right-[10%] blur-3xl"></div>
                        </div>

                        <div className="max-w-7xl mx-auto relative z-10">
                            <div className="text-center mb-16">
                                <motion.span
                                    className="inline-block px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    PROCESS
                                </motion.span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    How It Works
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Start your coding journey with these simple
                                    steps
                                </p>
                            </div>

                            {/* Process timeline with improved arrows */}
                            <div className="relative">
                                {/* Connection line that runs through all steps */}
                                <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-1 bg-gradient-to-r from-sky-100 via-blue-100 to-sky-100">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-sky-200 to-indigo-200"
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        whileInView={{ scaleX: 1, opacity: 1 }}
                                        transition={{
                                            duration: 1.5,
                                            ease: 'easeOut',
                                        }}
                                        viewport={{ once: true }}
                                    />
                                </div>

                                {/* Steps with a proper timeline appearance */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
                                    {[
                                        {
                                            icon: (
                                                <FaRobot
                                                    className="text-sky-500"
                                                    size={32}
                                                />
                                            ),
                                            title: 'Chat with AI',
                                            description:
                                                'Tell our AI what programming topics you want to learn',
                                        },
                                        {
                                            icon: (
                                                <MdSchool
                                                    className="text-sky-500"
                                                    size={32}
                                                />
                                            ),
                                            title: 'Get Your Roadmap',
                                            description:
                                                'Receive a personalized learning path and key concepts',
                                        },
                                        {
                                            icon: (
                                                <FaCode
                                                    className="text-sky-500"
                                                    size={32}
                                                />
                                            ),
                                            title: 'Study Materials',
                                            description:
                                                'Access curated resources for each topic in your roadmap',
                                        },
                                        {
                                            icon: (
                                                <FaChartLine
                                                    className="text-sky-500"
                                                    size={32}
                                                />
                                            ),
                                            title: 'Test Knowledge',
                                            description:
                                                'Take quizzes to reinforce your understanding',
                                        },
                                    ].map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            className="flex flex-col items-center text-center relative"
                                        >
                                            {/* Step number badge */}
                                            <div className="absolute -top-2 -left-2 bg-gradient-to-br from-sky-400 to-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold lg:hidden">
                                                {index + 1}
                                            </div>

                                            {/* Icon circle with step number for larger screens */}
                                            <div className="relative">
                                                <motion.div
                                                    initial={{
                                                        scale: 0.8,
                                                        opacity: 0,
                                                    }}
                                                    whileInView={{
                                                        scale: 1,
                                                        opacity: 1,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.2 + index * 0.1,
                                                        duration: 0.5,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm z-20 shadow-md hidden lg:flex"
                                                >
                                                    {index + 1}
                                                </motion.div>
                                                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-sky-50 to-white rounded-full mb-6 z-10 shadow-md border border-sky-100">
                                                    {step.icon}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 max-w-xs mx-auto">
                                                {step.description}
                                            </p>

                                            {/* Improved arrows between steps - properly aligned and sized */}
                                            {index < 3 && (
                                                <>
                                                    {/* Desktop arrow - positioned in the center between cards */}
                                                    <div className="hidden lg:block absolute left-full top-1/2 -translate-y-[80px] w-6 z-10">
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                x: -10,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.4 +
                                                                    index * 0.2,
                                                                duration: 0.4,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            className="flex items-center justify-center"
                                                        >
                                                            <div className="relative w-10 h-10 flex items-center justify-center">
                                                                <div className="absolute inset-0 bg-sky-200 rounded-full blur-md opacity-30"></div>
                                                                <FaArrowRight
                                                                    className="text-sky-500 relative z-10"
                                                                    size={18}
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    </div>

                                                    {/* Mobile arrow - positioned underneath each card except last */}
                                                    <div className="lg:hidden w-full flex justify-center mt-4 mb-2">
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: -5,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay: 0.3,
                                                                duration: 0.4,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            className="bg-gradient-to-r from-sky-100 to-indigo-100 h-8 w-8 rounded-full flex items-center justify-center shadow-sm"
                                                        >
                                                            <FaArrowRight
                                                                className="text-sky-500"
                                                                size={14}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Wave separator */}
                        <div className="absolute bottom-0 left-0 w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 120"
                                className="w-full h-[60px]"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    fill="#f0f7ff"
                                ></path>
                            </svg>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section
                        id="get-started"
                        className="py-24 px-6 bg-gradient-to-r from-sky-50 to-indigo-50 relative"
                    >
                        {/* Animated background elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-white opacity-40"
                                    initial={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        width: `${Math.random() * 200 + 100}px`,
                                        height: `${
                                            Math.random() * 200 + 100
                                        }px`,
                                        opacity: 0.2,
                                    }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: [0.2, 0.3, 0.2],
                                    }}
                                    transition={{
                                        duration: Math.random() * 20 + 15,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        ease: 'easeInOut',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-white p-12 rounded-2xl shadow-lg border border-gray-100 backdrop-blur-sm bg-opacity-80"
                            >
                                <motion.span
                                    className="inline-block px-3 py-1 bg-gradient-to-r from-sky-100 to-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    GET STARTED
                                </motion.span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Ready to Start Your Programming Journey?
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Join Axis today and get personalized
                                    guidance from our AI programming assistant.
                                </p>
                                <motion.button
                                    onClick={() => setShowQuizModal(true)}
                                    className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow:
                                            '0 15px 30px -5px rgba(0, 0, 0, 0.2)',
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start Learning for Free
                                </motion.button>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
