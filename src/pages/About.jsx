import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a strong community of creators, developers, and makers.'
    },
    {
      icon: Target,
      title: 'Innovation Driven',
      description: 'Constantly pushing boundaries to deliver cutting-edge technology and solutions.'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Every product is crafted with attention to detail and built to last.'
    },
    {
      icon: Heart,
      title: 'User Centered',
      description: 'Our users are at the heart of everything we do, guiding our decisions and priorities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About POP!_OS
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're on a mission to create the most powerful, user-friendly operating system 
            for creators, developers, and makers worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  POP!_OS was born from a simple idea: computers should work for you, not against you. 
                  Founded in 2009, System76 has been at the forefront of Linux-based computing, 
                  delivering hardware and software that empowers users to do their best work.
                </p>
                <p>
                  What started as a small team passionate about open-source software has grown into 
                  a global community of creators, developers, and makers who share our vision of 
                  computing freedom and innovation.
                </p>
                <p>
                  Today, POP!_OS powers millions of devices worldwide, from personal laptops to 
                  enterprise workstations, all running on our custom Linux distribution designed 
                  for productivity and creativity.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">10M+</div>
              <div className="text-slate-600 dark:text-slate-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">50+</div>
              <div className="text-slate-600 dark:text-slate-300">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">15+</div>
              <div className="text-slate-600 dark:text-slate-300">Years of Innovation</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, creator, or just passionate about great software, 
            there's a place for you in the POP!_OS community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;