import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import HardwareSection from '../components/HardwareSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <HardwareSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}