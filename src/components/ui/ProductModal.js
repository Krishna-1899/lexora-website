import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const ProductModal = ({ isOpen, onClose, product }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  // Get product data from the product configurations
  const getProductData = (productName) => {
    const productConfigs = {
      'LX-1': {
        name: 'LX-1 - Floor and Wall Tile Adhesive',
        description: 'LX-1 is a polymer-based tile adhesive specifically formulated for fixing ceramic tiles and small format natural stone, clay tiles, terracotta and quarry tiles of regular size. It is suitable for both vertical and horizontal surfaces, over the cementitious substrate for indoor application, in dry as well as wet areas.',
        link: '/lx-1'
      },
      'LX-2': {
        name: 'LX-2 - White Cement Based, Polymer Modified, Tile/Stone Adhesive',
        description: 'LX-2 is a premium, white cement-based tile adhesive specifically formulated for interior wall and floor installations. Designed to preserve the aesthetic appeal of light-colored tiles and stones, this polymer modified adhesive delivers exceptional bond strength and flexibility.',
        link: '/lx-2'
      },
      'LX-3': {
        name: 'LX-3 - Type 2T Tile Adhesive',
        description: 'LX-3 is a high-performance, polymer-modified, grey cement-based adhesive specifically designed for fixing low-porosity tiles (vitrified, semi-vitrified) and natural stones on interior and exterior floors, walls-interiors, and even swimming pools.',
        link: '/lx-3'
      },
      'LX-4': {
        name: 'LX-4 - White Cement Based, High Polymer Modified, Tile/Stone Adhesive',
        description: 'LX-4 is a high-performance, polymer-modified, white cement-based adhesive for low-porosity tiles (vitrified, semi-vitrified) and natural stones, suitable for both interior and exterior floors, and interior walls.',
        link: '/lx-4'
      },
      'LX-3 WHITE': {
        name: 'LX-3 WHITE - White Cement Based, High Performance Tile Adhesive',
        description: 'LX-3 WHITE is a high-performance, polymer-modified, white cement-based adhesive specifically designed for fixing low-porosity tiles (vitrified, semi-vitrified) and natural stones on interior and exterior floors, walls-interiors, and even swimming pools. It offers exceptional bond strength, water resistance, and ease of use. The white cement base preserves the aesthetic appeal of light-colored tiles and stones.',
        link: '/lx-3-white'
      },
      'LX-4 WHITE': {
        name: 'LX-4 WHITE - White Cement Based, High Polymer Modified, Tile/Stone Adhesive',
        description: 'LX-4 WHITE is a high-performance, polymer-modified, white cement-based adhesive for low-porosity tiles (vitrified, semi-vitrified) and natural stones, suitable for both interior and exterior floors, and interior walls. It provides excellent bond strength, water resistance, and ease of use, ideal for showers, wet areas, and swimming pools. The white cement base ensures the aesthetic appeal of light-colored tiles and stones is preserved.',
        link: '/lx-4-white'
      },
      'PU-L29': {
        name: 'LEXORA PU-L29 - Highly Flexible, Two-Component Polyurethane Adhesive',
        description: 'LEXORA PU-L29 is a high-performance, two-component polyurethane thinset adhesive designed for superior bonding of tiles and stone on both interior and exterior floors and walls. Engineered for exceptional flexibility, it is ideal for a wide range of substrates.',
        link: '/pu-l29'
      }
    };

    return productConfigs[productName] || {
      name: productName,
      description: 'Product description not available.',
      link: '/'
    };
  };

  const productData = getProductData(product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
        >
          <FaTimes className="text-gray-600" />
        </button>

        {/* Modal Body */}
        <div className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
            {/* Product Image */}
            <div className="flex justify-center mb-6 lg:mb-0 lg:flex-shrink-0">
              <div className="bg-kajaria-blue-50 p-4 rounded-lg max-w-[200px] shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="text-center lg:text-left lg:flex-1">
              <h2 className="text-2xl font-bold text-kajaria-blue-900 mb-4">
                {productData.name}
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base max-w-none lg:max-w-2xl">
                {productData.description}
              </p>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  to={productData.link}
                  onClick={onClose}
                  className="floens-btn"
                >
                  <span>View Full Details</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
