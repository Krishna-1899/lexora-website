import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import slider images
import sliderImage1 from '../../assets/images/backgrounds/slider-2-2.jpg';
import sliderImage2 from '../../assets/images/backgrounds/tile-adhesive-banner.webp';

const HeroSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bgImage: sliderImage1,
      tagline: "India's No.1 Tile Company",
      title: 'Strength for next generation',
      link: '/tile-adhesives'
    },
    {
      id: 2,
      bgImage: sliderImage2,
      tagline: 'Step Into the Future',
      title: 'The Ultimate Tile Fixing Solution',
      link: '/tile-adhesives'
    }
  ];

  // Custom Prev Arrow Component
  const PrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick}
      className="hero-slider-btn hero-slider-prev"
      style={{
        position: 'absolute',
        bottom: '0',
        left: 'calc(50% - 147px)',
        zIndex: 11,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '20px 34.5px',
        backgroundColor: '#B35600',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 500ms ease',
        overflow: 'hidden'
      }}
    >
      <span>Prev</span>
      <FiChevronLeft size={24} />
    </button>
  );

  // Custom Next Arrow Component  
  const NextArrow = ({ onClick }) => (
    <button 
      onClick={onClick}
      className="hero-slider-btn hero-slider-next"
      style={{
        position: 'absolute',
        bottom: '0',
        right: 'calc(50% - 147px)',
        zIndex: 11,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '20px 34.5px',
        backgroundColor: '#B35600',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 500ms ease',
        overflow: 'hidden'
      }}
    >
      <span>Next</span>
      <FiChevronRight size={24} />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <section className="relative overflow-hidden">
      <Slider ref={setSliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div className="relative h-screen min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
              {/* Background Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear after:content-[''] after:absolute after:inset-0 after:bg-black after:bg-opacity-50 ${
                  currentSlide === index ? 'scale-130' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[50px]">
                <div className="max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
                  {/* Tagline */}
                  <p className={`inline-block px-4 sm:px-6 md:px-[30px] py-2 bg-white bg-opacity-20 text-white text-sm sm:text-base font-medium uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3.2px] mb-3 sm:mb-4 md:mb-5 transition-all duration-[2000ms] ease-linear ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-20'
                  }`}>
                    {slide.tagline}
                  </p>
                  
                  {/* Title */}
                  <h1 className={`text-[28px] xs:text-[32px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[65px] 2xl:text-[90px] text-white leading-tight sm:leading-none uppercase mb-4 sm:mb-6 md:mb-8 transition-all duration-[2000ms] ease-linear ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-[120px]'
                  }`}>
                    {slide.title}
                  </h1>
                  
                  {/* Button */}
                  <div className={`transition-all duration-[2000ms] ease-linear ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-[120px]'
                  }`}>
                    <Link to="" className="floens-btn relative">
                      <span>discover more</span>
                      <FiChevronRight className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Counter */}
      <div className="absolute bottom-2 sm:bottom-[10px] right-4 sm:right-6 md:right-10 z-10 flex items-center gap-3 sm:gap-4 md:gap-6">
        <span className="relative text-sm sm:text-base font-medium uppercase text-[#2B1E16] after:content-[''] after:absolute after:top-1/2 after:right-[-8px] sm:after:right-[-12px] after:transform after:-translate-y-1/2 after:w-px after:h-[calc(100%-3px)] after:bg-[#DED8D3]">
          {String(slides.length).padStart(2, '0')}
        </span>
        <span className="text-[24px] sm:text-[28px] md:text-[35px] font-bold uppercase text-[#03045e]">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default HeroSlider; 