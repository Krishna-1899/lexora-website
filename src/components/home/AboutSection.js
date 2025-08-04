import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheck } from 'react-icons/fi';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import aboutBg from '../../assets/images/backgrounds/about-bg-2-1.png';
import about1 from '../../assets/images/about/about-2-1.webp';
import about2 from '../../assets/images/about/about-2-2.webp';

const AboutSection = () => {
  return (
    <section className="section-space relative bg-[#d5e9e8]">
      <div className='bg-[url("../../assets/images/backgrounds/about-bg-2-1.png")]'>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Images */}
            <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="0">
              <div className="about-two__image relative">
                <div className="about-two__image__inner relative">
                  <img 
                    src={about1}
                    alt="innovative tile solutions" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-[-15px] sm:bottom-[-20px] md:bottom-[-30px] right-[-25px] sm:right-[-35px] md:right-[-50px] w-1/2">
                    <img 
                      src={about2}
                      alt="innovative tile solutions" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="about-two__content">
              {/* Section Title */}
              <div className="sec-title sec-title--border mb-8">
                <h6 className="sec-title__tagline">about us</h6>
                <h3 className="sec-title__title">WELCOME TO GRESBOND BY KAJARIA</h3>
              </div>
              
              <div className="about-two__content__text" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">
                <h5 className="about-two__text-title text-xl font-semibold text-gray-900 mb-4">
                  Recent innovative tile solutions with the best performance
                </h5>
                
                <p className="about-two__text text-gray-700 mb-4 leading-relaxed">
                  The largest manufacturer of ceramic and vitrified tiles in India. Equipped with cutting-edge technology, we at Kajaria strive to deliver quality products and services to our customers. Our team of experts work around the clock to ensure that the quality of our product is never compromised.
                </p>
                
                <p className="about-two__text text-gray-700 mb-4 leading-relaxed">
                  When tiles are fixed to any surface, most vulnerable point is always the bond between the tile and substrate. We eliminate this weakness by significantly improving the bonding strength of the adhesive to both the tile and substrate.
                </p>
                
                <p className="about-two__text text-gray-700 mb-6 leading-relaxed">
                  <strong>Gresbond by Kajaria</strong> offers you wide range of tile adhesives & grouts for fixing of various categories of tile for faster laying & long lasting applications.
                </p>
              </div>
              
              {/* Features List */}
              <div className="about-two__list grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <div className="about-two__list__left space-y-3">
                  <div className="about-two__list__item flex items-center">
                    <FiCheck className="text-kajaria-blue-700 mr-3 text-lg" />
                    <span className="text-gray-800 font-medium">Premium Adhesives</span>
                  </div>
                  <div className="about-two__list__item flex items-center">
                    <FiCheck className="text-kajaria-blue-700 mr-3 text-lg" />
                    <span className="text-gray-800 font-medium">Premium Epoxy Grout</span>
                  </div>
                  <div className="about-two__list__item flex items-center">
                    <FiCheck className="text-kajaria-blue-700 mr-3 text-lg" />
                    <span className="text-gray-800 font-medium">Premium Tile Cleaner</span>
                  </div>
                </div>
                <div className="about-two__list__right space-y-3">
                  <div className="about-two__list__item flex items-center">
                    <FiCheck className="text-kajaria-blue-700 mr-3 text-lg" />
                    <span className="text-gray-800 font-medium">Premium Unsanded Grout</span>
                  </div>
                  <div className="about-two__list__item flex items-center">
                    <FiCheck className="text-kajaria-blue-700 mr-3 text-lg" />
                    <span className="text-gray-800 font-medium">Premium Grout Admix</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="about-two__button" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                <Link to="/who-we-are" className="floens-btn inline-flex items-center">
                  <span>more about us</span>
                  <FiChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutSection; 