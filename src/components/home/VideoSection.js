import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Container from '../ui/Container';
import videoBg from '../../assets/images/lexora chembond.mp4';
import thumnail from '../../assets/images/img85.jpg';
import sliderVideoBg from '../../assets/images/resources/slider-video-bg.png';

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <section className="relative pt-10" id="video-section">
      <Container>
        <div className="sec-title sec-title--center mb-12" data-aos="fade-up">
          <h6 className="sec-title__tagline">Discover</h6>
          <h3 className="sec-title__title">Discover Why Premium Adhesive is Key for Trendy Large Slab Installation!</h3>
        </div>
        <div className="relative rounded-lg overflow-visible z-10" data-aos="fade-up" data-aos-delay="200">
          {!showVideo ? (
            <div 
              className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center rounded-lg"
              style={{ backgroundImage: `url(${thumnail})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              
              <div className="relative z-10 px-12">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="video-button video-button--large video-popup relative w-24 h-24 rounded-full flex items-center justify-center group transform transition-all duration-300 hover:scale-110"
                  style={{ backgroundImage: `url(${sliderVideoBg})` }}
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <span className="flex items-center justify-center w-20 h-20 rounded-full bg-kajaria-blue-700 text-white transition-all duration-300 group-hover:bg-kajaria-blue-800">
                    <FaPlay className="ml-1 text-2xl" />
                  </span>
                  <div className="video-button__ripple absolute inset-0 rounded-full border-2 border-white border-opacity-50 animate-ping"></div>
                  <div className="video-button__ripple absolute inset-0 rounded-full border-2 border-white border-opacity-30 animate-ping animation-delay-200"></div>
                </button>
              </div>
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <video src={videoBg} autoPlay controls loop className='w-full h-[400px] md:h-[500px]' />
              {/* <iframe 
                src="https://www.youtube.com/embed/LIG3lebNp-o?autoplay=1" 
                title="Importance of Using Premium Adhesive to Install Trendy Large Slabs" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-[400px] md:h-[500px]"
              ></iframe> */}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default VideoSection; 