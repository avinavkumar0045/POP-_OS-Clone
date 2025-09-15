import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Monitor, Server, Keyboard } from 'lucide-react';

const HardwareSection = () => {
  const categories = [
    {
      icon: Laptop,
      title: 'Laptops',
      description: 'Powerful, portable machines built for creators and developers.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      href: '/products?category=laptops'
    },
    {
      icon: Monitor,
      title: 'Desktops',
      description: 'High-performance workstations for demanding workflows.',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      href: '/products?category=desktops'
    },
    {
      icon: Server,
      title: 'Workstations',
      description: 'Professional-grade systems for intensive computing tasks.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      href: '/products?category=workstations'
    },
    {
      icon: Keyboard,
      title: 'Keyboards',
      description: 'Mechanical keyboards designed for comfort and precision.',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      href: '/products?category=keyboards'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Hardware Built for POP!_OS
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Every System76 computer is designed, assembled, and supported in Denver, Colorado. 
            Built for creators, developers, and makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                to={category.href}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-gray-700 hover:border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-600"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-3">
                      <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-violet-600 dark:text-violet-400 group-hover:text-violet-700 font-medium text-sm">
                    <span>Shop {category.title}</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>View All Products</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;