import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import service images
import service1Image from '../../assets/images/offer/service-1.webp';
import service2Image from '../../assets/images/offer/service-2.webp';
import service3Image from '../../assets/images/offer/service-3.webp';
import offerBg from '../../assets/images/backgrounds/offer-bg.jpg';

// Import adhesive icons
import resistantToStainsIcon from '../../assets/images/adhesives/resistant-to-stains-and-seepage.svg';
import waterResistantIcon from '../../assets/images/adhesives/water-resistant.svg';
import savesTimeIcon from '../../assets/images/adhesives/saves-time-surface-ready-to-use-within-24-hours.svg';
import highBondStrengthIcon from '../../assets/images/adhesives/high-bond-strength.svg';
import noHollownessIcon from '../../assets/images/adhesives/no-hollowness-between-tile-and-substrate.svg';
import canBeUsedDirectlyIcon from '../../assets/images/adhesives/can-be-used-directly-on-any-surface.svg';
import whiteAdhesiveIcon from '../../assets/images/adhesives/white-adhesive-specially-for-light-base-tile.svg';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('ModernTiels');
  
  const tabContent = {
    'ModernTiels': {
      image: service3Image,
      title: 'Fast and Economical',
      text: 'Gresbond Premium Tile adhesive can be easily applied over large areas with a notched trowel. Then the tiles can be adjusted gently after laying to produce a uniform adhesive bed.'
    },
    'FloorRemoval': {
      image: service1Image,
      title: 'Easy to work with',
      text: 'Gresbond High-quality tile adhesives for wall application have good non-slump properties. The freshly laid tiles therefore do not slip on the wall. It is thus possible to lay the tiles from top to bottom without using spacers. This makes it easier to produce a uniform pattern.'
    },
    'KitchenStripOuts': {
      image: service2Image,
      title: 'Excellent Results',
      text: 'Gresbond advanced premium adhesives are so easy to mix and install that good results are consistently achieved. Irrespective of the tile material or the substrate, the tile adhesive can be custom-mixed for the particular tile type and substrate.'
    }
  };
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  const features = [
    { 
      icon: resistantToStainsIcon, 
      title: 'Resistant to Stains and Seepage' 
    },
    { 
      icon: waterResistantIcon, 
      title: 'Water Resistant' 
    },
    { 
      icon: savesTimeIcon, 
      title: 'Saves Time Surface ready to use within 24 hours' 
    },
    { 
      icon: highBondStrengthIcon, 
      title: 'High Bond Strength' 
    },
    { 
      icon: noHollownessIcon, 
      title: 'No Hollowness between Tile and Substrate' 
    },
    { 
      icon: canBeUsedDirectlyIcon, 
      title: 'Can be used directly on any surface*' 
    },
    { 
      icon: whiteAdhesiveIcon, 
      title: 'White Adhesive specially for light base tile' 
    }
  ];
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          margin: 70
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          margin: 70
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          margin: 50
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          margin: 40
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
          margin: 40
        }
      }
    ]
  };
  
  return (
    <section className="section-space-two relative" style={{ backgroundColor: '#d5e9e8' }}>
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${offerBg})` }}
      ></div>
      <Container>
        <div className="relative z-10">
          {/* Section Title */}
          <div className="sec-title mb-12" data-aos="fade-up">
            <h6 className="sec-title__tagline">Gresbond</h6>
            <h3 className="sec-title__title">Tile Adhesives, Grouts And Tile Cleaners</h3>
          </div>
          
          {/* Tab Section */}
          <div 
            className="bg-white overflow-hidden mb-12 relative"
            style={{ 
              backgroundImage: `url(${offerBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Tab Buttons */}
              <div className="w-full lg:w-1/3 flex justify-center px-4 lg:px-0">
                <ul className="flex flex-col w-full lg:w-11/12 justify-center">
                  <li 
                    className={`tab-btn cursor-pointer transition-all duration-300 ${activeTab === 'ModernTiels' ? 'bg-primary text-white' : '`text-kajaria-blue-700` hover:bg-blue-600 bg-white hover:text-white'}`}
                    onClick={() => handleTabClick('ModernTiels')}
                  >
                    <button type="button" className="tab-btn__inner w-full text-left p-3 sm:p-4 md:p-6 flex items-center justify-between hover:bg-blue-600 transition-all duration-300">
                      <span className="font-medium">Fast and Economical</span>
                      <span className="tab-btn__icon">
                        <FiArrowRight className="text-x" />
                      </span>
                    </button>
                  </li>
                  <li 
                    className={`tab-btn cursor-pointer transition-all duration-300 ${activeTab === 'FloorRemoval' ? 'bg-primary text-white' : 'text-kajaria-blue-700 hover:bg-blue-600 bg-white hover:text-white'}`}
                    onClick={() => handleTabClick('FloorRemoval')}
                  >
                    <button type="button" className="tab-btn__inner w-full text-left p-3 sm:p-4 md:p-6 flex items-center justify-between transition-all duration-300">
                      <span className="font-medium">Easy to work with</span>
                      <span className="tab-btn__icon">
                        <FiArrowRight className="text-xl" />
                      </span>
                    </button>
                  </li>
                  <li 
                    className={`tab-btn cursor-pointer transition-all duration-300 ${activeTab === 'KitchenStripOuts' ? 'bg-primary text-white' : 'text-kajaria-blue-700 hover:bg-blue-600 bg-white hover:text-white'}`}
                    onClick={() => handleTabClick('KitchenStripOuts')}
                  >
                    <button type="button" className="tab-btn__inner w-full text-left p-3 sm:p-4 md:p-6 flex items-center justify-between transition-all duration-300">
                      <span className="font-medium">Excellent Results</span>
                      <span className="tab-btn__icon">
                        <FiArrowRight className="text-xl" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Tab Content */}
              <div className="w-full lg:w-2/3 p-4 sm:p-6 md:p-8 flex justify-center">
                <div className='p-4 sm:p-6 md:p-8 bg-white rounded-lg lg:rounded-none'>
                  <div className=" offer-one__service flex flex-col lg:flex-row items-center w-full justify-center ">
                    <div className="offer-one__service__image w-full lg:w-1/2 mb-6 lg:mb-0">
                      <img 
                        src={tabContent[activeTab].image} 
                        alt={tabContent[activeTab].title} 
                        className="w-full h-auto adviceimage"
                      />
                    </div>
                    <div className="offer-one__service__content w-full lg:w-1/2 lg:pl-8">
                      <h3 className="offer-one__service__title text-2xl font-bold mb-4 text-kajaria-blue-900">
                        {tabContent[activeTab].title}
                      </h3>
                      <p className="offer-one__service__text adhesives_txt text-gray-700 leading-relaxed">
                        {tabContent[activeTab].text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Slider */}
          <div className="py-8" data-aos="fade-up" data-aos-delay="200">
            <div className="ourfeatureblock">
              <Slider {...sliderSettings}>
                {features.map((feature, index) => (
                  <div key={index} className="px-3">
                    <div className="client-carousel__one__item benifit_item flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-110">
                      <img 
                        src={feature.icon} 
                        alt={feature.title} 
                        className="h-28 w-28 mb-4"
                      />
                      <div className="benifits_title text-sm font-medium text-gray-800 leading-tight">
                        {feature.title}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection; 