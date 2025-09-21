
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FeatureShowcase from './components/FeatureShowcase';

const App: React.FC = () => {
  return (
    <div className="bg-white text-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeatureShowcase />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
