import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import dealerBg from '../../assets/images/backgrounds/dealer-background.png';

const DealerSection = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${dealerBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0" data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-3xl font-bold text-white mb-2">Where To Buy</h3>
              <p className="text-white text-opacity-90">We work with thousands of retailers across India</p>
            </div>
            
            <div 
              className="flex items-center"
              data-aos="fade-left" 
              data-aos-delay="300"
            >
              <div className="mr-4 text-primary text-3xl">
                <FaMapMarkerAlt />
              </div>
              <Link 
                to="" 
                className="text-xl font-bold text-white hover:text-primary transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">Find A Dealer</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerSection; 