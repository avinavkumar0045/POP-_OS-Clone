import React from 'react';
import { Workflow, Shield, Palette, Gamepad2, Monitor, BellOff } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Streamlined Workflow',
      description: 'Navigate with purpose. Workspaces and window management keep you organized and efficient.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Built-in Security',
      description: 'Full-disk encryption and secure boot protect your data and system integrity.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Palette,
      title: 'Endless Customization',
      description: 'Make it yours. Themes, extensions, and settings that adapt to your style.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Monitor,
      title: 'Hybrid Graphics',
      description: 'Seamlessly switch between integrated and discrete graphics for optimal performance.',
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Ready',
      description: 'Steam, Lutris, and GameHub pre-installed. Play your favorite games out of the box.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: BellOff,
      title: 'Do Not Disturb',
      description: 'Focus mode that silences notifications and distractions when you need to concentrate.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why POP!_OS?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Built for creators, developers, and makers who need their computer to work as hard as they do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-gray-600 hover:border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-600"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-violet-100 dark:bg-violet-900 rounded-lg mr-3">
                      <Icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;