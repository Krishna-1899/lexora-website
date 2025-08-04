import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import HeroSlider from './HeroSlider';
import FeaturesSection from './FeaturesSection';
import ProductsSlider from './ProductsSlider';
import AboutSection from './AboutSection';
import WhyChooseSection from './WhyChooseSection';
import VideoSection from './VideoSection';
import ProjectsSection from './ProjectsSection';
import DealerSection from './DealerSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 100
    });
    
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <HeroSlider />
      <FeaturesSection />
      <ProductsSlider />
      <AboutSection />
      <WhyChooseSection />
      <VideoSection />
      <ProjectsSection />
      <FAQSection />
      <BlogSection />
      <DealerSection />
    </Layout>
  );
};

export default HomePage; 