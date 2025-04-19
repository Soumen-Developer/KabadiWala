import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import HowItWorks from '../components/home/HowItWorks';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedServices />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;