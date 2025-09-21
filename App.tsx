import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FeatureShowcase from './components/FeatureShowcase';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Features />
    <FeatureShowcase />
    <Testimonials />
    <FinalCTA />
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white text-dark">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;