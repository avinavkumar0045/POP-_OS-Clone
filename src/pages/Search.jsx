import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search as SearchIcon, Filter, Grid, List } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // Mock search data
  const allContent = [
    {
      id: 1,
      type: 'product',
      title: 'Lemur Pro Laptop',
      description: 'Ultra-portable laptop with exceptional battery life',
      category: 'Hardware',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      url: '/product/1'
    },
    {
      id: 2,
      type: 'article',
      title: 'Getting Started with POP!_OS',
      description: 'Complete guide to installing and configuring POP!_OS',
      category: 'Documentation',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      url: '/docs/getting-started'
    },
    {
      id: 3,
      type: 'blog',
      title: 'POP!_OS 22.04 LTS Release Notes',
      description: 'Discover the latest features and improvements',
      category: 'Blog',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      url: '/blog/pop-os-22-04-lts'
    },
    {
      id: 4,
      type: 'product',
      title: 'Launch Keyboard',
      description: 'Mechanical keyboard with hot-swappable switches',
      category: 'Hardware',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      url: '/product/7'
    }
  ];

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      performSearch(searchQuery);
    }
  }, [searchParams]);

  const performSearch = (searchQuery) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredResults = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
      performSearch(query);
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'product': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'article': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'blog': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Search
          </h1>
          
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, articles, and more..."
                className="w-full pl-12 pr-4 py-4 border border-slate-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-300">Searching...</p>
          </div>
        ) : query && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600 dark:text-slate-300">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600 dark:text-slate-300">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-16">
                <SearchIcon className="h-16 w-16 text-slate-300 dark:text-gray-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No results found
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Try adjusting your search terms or browse our categories.
                </p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }>
                {results.map((result) => (
                  <div
                    key={result.id}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
                      viewMode === 'list' ? 'flex' : 'block'
                    }`}
                    onClick={() => window.location.href = result.url}
                  >
                    <div className={viewMode === 'list' ? 'w-32 flex-shrink-0' : 'aspect-video'}>
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {result.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Laptops', 'Keyboards', 'Documentation', 'Installation', 'Tutorials'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    setSearchParams({ q: term });
                    performSearch(term);
                  }}
                  className="px-4 py-2 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;