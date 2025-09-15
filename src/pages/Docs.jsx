import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Book, Code, Settings, HelpCircle, ChevronRight } from 'lucide-react';

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const docSections = [
    {
      title: 'Getting Started',
      icon: Book,
      articles: [
        { title: 'Installation Guide', description: 'Step-by-step installation instructions' },
        { title: 'First Time Setup', description: 'Configure your system for optimal performance' },
        { title: 'System Requirements', description: 'Minimum and recommended specifications' }
      ]
    },
    {
      title: 'User Guide',
      icon: HelpCircle,
      articles: [
        { title: 'Desktop Environment', description: 'Navigate and customize your workspace' },
        { title: 'Window Management', description: 'Master tiling and window organization' },
        { title: 'Keyboard Shortcuts', description: 'Essential shortcuts for productivity' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: Code,
      articles: [
        { title: 'Development Environment', description: 'Set up your coding workspace' },
        { title: 'Package Management', description: 'Install and manage software packages' },
        { title: 'Terminal Usage', description: 'Advanced terminal commands and tips' }
      ]
    },
    {
      title: 'System Configuration',
      icon: Settings,
      articles: [
        { title: 'Display Settings', description: 'Configure monitors and graphics' },
        { title: 'Network Setup', description: 'Wi-Fi, Ethernet, and VPN configuration' },
        { title: 'Security Options', description: 'Encryption, firewall, and privacy settings' }
      ]
    }
  ];

  const filteredSections = docSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, tutorials, and resources to help you get the most out of POP!_OS.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-6">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg mr-3">
                    <Icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.articles.map((article, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                            {article.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                            {article.description}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-slate-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Book className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">User Manual</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Complete user guide and reference</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">API Reference</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Technical documentation for developers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Support Center</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Get help from our community</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Support
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;