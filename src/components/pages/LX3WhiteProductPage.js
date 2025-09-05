import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';
import lx3white from '../../assets/images/menu/LX_03-white.png';

const LX3WhiteProductPage = () => {
  // Get LX-03 configuration and modify it for LX-03 WHITE
  const lx3Config = productConfigurations['lx-3'];
  
  const lx3WhiteConfig = {
    ...lx3Config,
    productImage: lx3white,
    pageTitle: "LX-03 WHITE - For Fixing Vitrified Tiles",
    breadcrumbs: [{ label: 'LX-03 WHITE', link: null }],
    productName: "LX-03 WHITE - For Fixing Vitrified Tiles",
    description: "LX-03 WHITE is a high-performance, polymer-modified, white cement-based adhesive specifically designed for fixing low-porosity tiles (vitrified, semi-vitrified) and natural stones on interior and exterior floors, walls-interiors, and even swimming pools. It offers exceptional bond strength, water resistance, and ease of use. The white cement base preserves the aesthetic appeal of light-colored tiles and stones.",
    altText: "LX-03 WHITE White Color Adhesive for Tiles & Marbles",
    accordionItems: [
      {
        title: "Key Features And Benefits",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Superior Bond Strength:</strong> Exceeds EN & ISO C2TE classification for shear bond strength, ensuring a durable and long-lasting installation.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Versatile Application:</strong> Suitable for most common substrates like concrete, masonry surfaces, existing tiles, and even terraces.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Water Resistant:</strong> Ideal for wet areas like showers, bathrooms, and swimming pools.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Easy to Use:</strong> Single-component formula requires only the addition of water for a smooth, trowelable consistency.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Smooth Application & Curing:</strong> Easy mixing, smooth application & better workability and achieves full strength in approximately 14 days.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Economical:</strong> Cost-effective solution for various tiling projects.</p>
            </li>
          </ul>
        )
      },{
        title: "Advantages",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Single-component, easy to use:</strong> Simply add water for a ready-mixed solution</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Interior applications:</strong> Ideal for use on interior floors and walls.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Economical:</strong> Cost-effective solution for tile installation.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>High-performance:</strong> Meets international classifications EN 12004 - C2TE – Type 3.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Versatile:</strong> Bonds to various substrates including concrete, concrete masonry and cement-based surfaces.</p>
            </li>
          </ul>
        )
      },
      {
        title: "SUBSTRATES",
        content: (
          <div>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Concrete</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Concrete Masonry</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Cement Mortar Beds</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Cement Plaster</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Brick Masonry</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </span>
                <p>Existing Natural Stone* (cleaned and roughened)</p>
              </li>
            </ul>
            <p><strong>Note:</strong> Surfaces must be cleaned and roughened before installation of tiles or stones</p>
          </div>
        )
      },
      {
        title: "APPLICATION",
        content: (
          <p>
            LX-03 is designed for dry areas of interior floors and walls. It can be used for installing all types of ceramic tiles and small format natural stones on concrete and various cement-based substrates. The maximum bed thickness is 12mm.
          </p>
        )
      },
      {
        title: "CERTIFICATIONS",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>IS 15477:2019 Type:</strong> 3T</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>EN 12004 / ISO 13007:</strong> C2TE</p>
            </li>
          </ul>
        )
      },
      {
        title: "PERFORMANCE PROPERTIES : (LX-03 Adhesive mixed with Water):",
        content: (
          <p>
            This adhesive mortar conforms to IS 15477: 2019 - Type 3T Adhesive.
          </p>
        )
      },
      {
        title: "PACKAGING",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>PACKAGING :</strong> 20 kg bag Available in White with the name of LX-03 WHITE</p>
            </li>
          </ul>
        )
      }
    ],
  };

  return <ProductPageTemplate {...lx3WhiteConfig} />;
};

export default LX3WhiteProductPage;
