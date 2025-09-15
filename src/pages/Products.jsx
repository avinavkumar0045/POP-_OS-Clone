import React, { useState, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();
  
  const selectedCategory = searchParams.get('category') || 'all';

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'laptops', name: 'Laptops', count: 8 },
    { id: 'desktops', name: 'Desktops', count: 6 },
    { id: 'workstations', name: 'Workstations', count: 4 },
    { id: 'mini', name: 'Mini', count: 2 },
    { id: 'servers', name: 'Servers', count: 2 },
    { id: 'keyboards', name: 'Keyboards', count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: 'Lemur Pro',
      category: 'laptops',
      price: 1099,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-portable laptop with exceptional battery life',
      specs: ['Intel Core i7', '32GB RAM', '1TB NVMe SSD', '14.1" 1080p Display']
    },
    {
      id: 2,
      name: 'Galago Pro',
      category: 'laptops',
      price: 899,
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Compact powerhouse for developers and creators',
      specs: ['Intel Core i5', '16GB RAM', '500GB NVMe SSD', '14" 1080p Display']
    },
    {
      id: 3,
      name: 'Oryx Pro',
      category: 'laptops',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-performance laptop for intensive workloads',
      specs: ['Intel Core i9', '64GB RAM', '2TB NVMe SSD', '15.6" 4K Display']
    },
    {
      id: 4,
      name: 'Meerkat',
      category: 'mini',
      price: 599,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Compact desktop computer for everyday computing',
      specs: ['Intel Core i5', '8GB RAM', '240GB SSD', 'Intel UHD Graphics']
    },
    {
      id: 5,
      name: 'Thelio',
      category: 'desktops',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful desktop built for creators and makers',
      specs: ['AMD Ryzen 7', '32GB RAM', '1TB NVMe SSD', 'NVIDIA GTX 1660']
    },
    {
      id: 6,
      name: 'Thelio Major',
      category: 'workstations',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Powerful workstation for professional workflows',
      specs: ['AMD Threadripper', '128GB RAM', '4TB NVMe SSD', 'NVIDIA RTX 4080']
    },
    {
      id: 7,
      name: 'Launch Keyboard',
      category: 'keyboards',
      price: 285,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Mechanical keyboard with hot-swappable switches',
      specs: ['Hot-swappable switches', 'USB-C', 'Aluminum body', 'RGB backlighting']
    },
    {
      id: 8,
      name: 'Launch Heavy',
      category: 'keyboards',
      price: 365,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium mechanical keyboard with steel plate',
      specs: ['Steel plate', 'Hot-swappable switches', 'USB-C', 'Premium keycaps']
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            System76 Products
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Computers and accessories designed for creators, developers, and makers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 ${
                      selectedCategory === category.id
                        ? 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs text-slate-400">{category.count}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-gray-700 p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-600 dark:text-slate-300">View:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
                    aria-label="Grid view"
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-400' : 'text-slate-400 hover:text-slate-600 dark:text-gray-400 dark:hover:text-gray-200'}`}
                    aria-label="List view"
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-slate-600 dark:text-slate-300">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-gray-700 hover:border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-600 ${
                    viewMode === 'list' ? 'flex' : 'block'
                  }`}
                >
                  <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                      loading="lazy"
                      onClick={() => handleImageClick(product.id)}
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <ul className="text-xs text-slate-500 dark:text-gray-400 space-y-1">
                        {product.specs.slice(0, 3).map((spec, index) => (
                          <li key={index}>• {spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">
                        ${product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-slate-400 mb-4">
                  <Filter className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No products found</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}