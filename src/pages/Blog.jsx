import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, Tag, Search, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'releases', name: 'Releases' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'news', name: 'News' },
    { id: 'community', name: 'Community' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'POP!_OS 22.04 LTS: What\'s New',
      excerpt: 'Discover the latest features and improvements in our newest long-term support release.',
      author: 'System76 Team',
      date: '2024-01-15',
      category: 'releases',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Release', 'LTS', 'Features']
    },
    {
      id: 2,
      title: 'Mastering Window Tiling in POP!_OS',
      excerpt: 'Learn advanced window management techniques to boost your productivity.',
      author: 'Jane Developer',
      date: '2024-01-10',
      category: 'tutorials',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Tutorial', 'Productivity', 'Window Management']
    },
    {
      id: 3,
      title: 'Community Spotlight: Creative Projects Built on POP!_OS',
      excerpt: 'Showcase of amazing projects created by our community members.',
      author: 'Community Team',
      date: '2024-01-05',
      category: 'community',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Community', 'Showcase', 'Projects']
    },
    {
      id: 4,
      title: 'Security Updates and Best Practices',
      excerpt: 'Stay secure with the latest updates and recommended security practices.',
      author: 'Security Team',
      date: '2023-12-28',
      category: 'news',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Security', 'Updates', 'Best Practices']
    },
    {
      id: 5,
      title: 'Setting Up Your Development Environment',
      excerpt: 'Complete guide to configuring the perfect development workspace.',
      author: 'Dev Team',
      date: '2023-12-20',
      category: 'tutorials',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Tutorial', 'Development', 'Setup']
    },
    {
      id: 6,
      title: 'POP!_OS in Education: Success Stories',
      excerpt: 'How educational institutions are leveraging POP!_OS for teaching and learning.',
      author: 'Education Team',
      date: '2023-12-15',
      category: 'news',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Education', 'Success Stories', 'Case Study']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest news, tutorials, and insights from the POP!_OS community.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-slate-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium text-sm cursor-pointer hover:text-violet-700 dark:hover:text-violet-300">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No articles found</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-slate-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles, tutorials, and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
            />
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;