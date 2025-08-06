import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button immediately for testing
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    console.log("handl clieked ")
    const phoneNumber = '8758435000';
    const message = encodeURIComponent('Hi! I would like to know more about your products.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="relative">
          {/* Ripple Effect - Behind the button */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
          
          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative z-10 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer"
            aria-label="Chat on WhatsApp"
            style={{ pointerEvents: 'auto' }}
          >
            <FaWhatsapp className="text-2xl pointer-events-none" />
          </button>
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-[10000] pointer-events-none select-none">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      </div>

      {/* Notification Badge (optional - shows for first few seconds) */}
      {isVisible && (
        <div className="fixed bottom-6 right-24 z-[9998] animate-bounce pointer-events-none select-none">
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg select-none">
            New
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;