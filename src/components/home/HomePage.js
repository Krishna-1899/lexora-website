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

    // Handle hash-based scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Call the function when component mounts
    handleHashScroll();
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