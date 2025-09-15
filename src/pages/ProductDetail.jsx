import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Lemur Pro',
      price: 1099,
      originalPrice: 1199,
      rating: 4.8,
      reviewCount: 124,
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Ultra-portable laptop with exceptional battery life and powerful performance for creators and developers.',
      specs: [
        'Intel Core i7-1165G7 Processor',
        '32GB DDR4 RAM',
        '1TB NVMe SSD',
        '14.1" 1080p IPS Display',
        'Up to 12 hours battery life',
        'Aluminum chassis',
        'Backlit keyboard'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 2,
      name: 'Galago Pro',
      price: 899,
      originalPrice: 999,
      rating: 4.6,
      reviewCount: 89,
      images: [
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Compact powerhouse for developers and creators with excellent performance in a lightweight package.',
      specs: [
        'Intel Core i5-1135G7 Processor',
        '16GB DDR4 RAM',
        '500GB NVMe SSD',
        '14" 1080p IPS Display',
        'Up to 10 hours battery life',
        'Carbon fiber chassis'
      ],
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 3,
      name: 'Oryx Pro',
      price: 1899,
      originalPrice: 2099,
      rating: 4.9,
      reviewCount: 67,
      images: [
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'High-performance laptop for intensive workloads, featuring top-tier specs and premium build quality.',
      specs: [
        'Intel Core i9-11950H Processor',
        '64GB DDR4 RAM',
        '2TB NVMe SSD',
        '15.6" 4K OLED Display',
        'NVIDIA RTX 3060 Graphics',
        'Up to 8 hours battery life',
        'Premium aluminum chassis'
      ],
      inStock: false,
      category: 'Laptops'
    },
    {
      id: 4,
      name: 'Meerkat',
      price: 599,
      originalPrice: 699,
      rating: 4.4,
      reviewCount: 156,
      images: [
        'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Compact desktop computer for everyday computing with reliable performance and modern design.',
      specs: [
        'Intel Core i5-10400 Processor',
        '8GB DDR4 RAM',
        '240GB SSD',
        'Intel UHD Graphics 630',
        'Compact form factor'
      ],
      inStock: true,
      category: 'Desktops'
    },
    {
      id: 5,
      name: 'Thelio',
      price: 1299,
      originalPrice: 1499,
      rating: 4.7,
      reviewCount: 203,
      images: [
        'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      ],
      description: 'Beautiful desktop built for creators and makers with powerful hardware and elegant design.',
      specs: [
        'AMD Ryzen 7 3700X Processor',
        '32GB DDR4 RAM',
        '1TB NVMe SSD',
        'NVIDIA GTX 1660 Graphics',
        'USB-C front ports',
        'Tool-less design'
      ],
      inStock: true,
      category: 'Desktops'
    },
    {
      id: 6,
      name: 'Thelio Major',
      price: 2999,
      originalPrice: 3299,
      rating: 4.9,
      reviewCount: 45,
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      ],
      description: 'Powerful workstation for professional workflows with enterprise-grade components.',
      specs: [
        'AMD Threadripper 3960X Processor',
        '128GB DDR4 RAM',
        '4TB NVMe SSD',
        'NVIDIA RTX 4080 Graphics',
        '10 Gigabit Ethernet',
        'Redundant power supplies'
      ],
      inStock: true,
      category: 'Workstations'
    },
    {
      id: 7,
      name: 'Launch Keyboard',
      price: 285,
      originalPrice: 315,
      rating: 4.8,
      reviewCount: 312,
      images: [
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Mechanical keyboard with hot-swappable switches, perfect for typing and gaming.',
      specs: [
        'Hot-swappable MX switches',
        'USB-C connection',
        'Aluminum body',
        'RGB backlighting',
        'NKRO support'
      ],
      inStock: true,
      category: 'Keyboards'
    },
    {
      id: 8,
      name: 'Launch Heavy',
      price: 365,
      originalPrice: 399,
      rating: 4.9,
      reviewCount: 178,
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Premium mechanical keyboard with steel plate for enhanced stability and sound.',
      specs: [
        'Steel plate mount',
        'Hot-swappable MX switches',
        'USB-C connection',
        'Premium PBT keycaps',
        'RGB backlighting'
      ],
      inStock: true,
      category: 'Keyboards'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const foundProduct = products.find(p => p.id === parseInt(id));
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Browse Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
            Home
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <Link to="/products" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
            Products
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-900 dark:text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-violet-600' : 'border-slate-200 dark:border-gray-700'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-slate-600 dark:text-slate-300">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-slate-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice > product.price && (
                <span className="text-green-600 font-medium">
                  Save ${(product.originalPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">{product.description}</p>

            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-medium text-slate-900 dark:text-white">Quantity:</span>
                <div className="flex items-center border border-slate-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-slate-900 dark:text-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                <button className="p-3 border border-slate-300 dark:border-gray-600 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
                  <Heart className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-slate-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Free shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">2-year warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">30-day returns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">Premium support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16 border-t border-slate-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-gray-800 rounded-lg">
                <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                <span className="text-slate-700 dark:text-slate-300">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;