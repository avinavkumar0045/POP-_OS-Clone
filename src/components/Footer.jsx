import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Laptops', href: '/products?category=laptops' },
        { name: 'Desktops', href: '/products?category=desktops' },
        { name: 'Workstations', href: '/products?category=workstations' },
        { name: 'Keyboards', href: '/products?category=keyboards' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Warranty', href: '/warranty' },
        { name: 'Returns', href: '/returns' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/system76', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/system76', icon: Twitter },
    { name: 'YouTube', href: 'https://youtube.com/system76', icon: Youtube },
    { name: 'Newsletter', href: '/newsletter', icon: Mail },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8  rounded-md flex items-center justify-center">
                <img src="/logo.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
              </div>
              <span className="text-xl font-bold text-white">POP!_OS</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              A Linux distribution designed for creators, makers, and computer builders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded-md p-1"
                    aria-label={social.name}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded-md"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © {currentYear} System76, Inc. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 mt-4 md:mt-0">
               <a
          
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 rounded-md"
              >
                
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;