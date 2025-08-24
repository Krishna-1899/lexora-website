import React from 'react';
import { FaDownload, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductDetails = ({ 
  productName, 
  productImage, 
  description, 
  tdsLink, 
  dealerLink,
  altText 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-kajaria-blue-50 p-8 rounded-lg max-w-md">
              <img 
                src={productImage} 
                alt={altText}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                {productName}
              </h1>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-kajaria-brown-900 mb-3">
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                // href={tdsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="floens-btn inline-flex items-center justify-center"
              >
                <span>Download TDS</span>
                <FaDownload className="ml-2" />
              </a>
              
              <Link 
                // to={dealerLink}
                to="#"
                className="floens-btn floens-btn--border inline-flex items-center justify-center"
              >
                <span>Find A Dealer</span>
                <FaSearch className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
