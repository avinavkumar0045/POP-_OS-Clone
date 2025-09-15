import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { toast } from 'react-toastify';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Mock subscription
    setIsSubscribed(true);
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Get the latest updates on POP!_OS releases, System76 hardware, and exclusive offers 
            delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600"
                disabled={isSubscribed}
              />
            </div>
            <button
              type="submit"
              disabled={isSubscribed}
              className="bg-white text-violet-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubscribed ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </div>
        </form>

        <p className="text-sm text-violet-200 mt-4">
          No spam, unsubscribe at any time. Read our{' '}
          <a href="/privacy" className="underline hover:text-white transition-colors">
            
          </a>
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;