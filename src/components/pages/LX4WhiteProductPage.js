import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { lx4Configuration } from '../../data/lx4Data';
import lx4WhiteImage from '../../assets/images/menu/LX-04-white.png';

const LX4WhiteProductPage = () => {
  // Get LX-4 configuration and modify it for LX-4 WHITE
  const lx4WhiteConfig = {
    ...lx4Configuration,
    productImage: lx4WhiteImage,
    pageTitle: "LX-4 WHITE - White Cement Based, High Polymer Modified, Tile/Stone Adhesive",
    breadcrumbs: [{ label: 'LX-4 WHITE', link: null }],
    productName: "LX-4 WHITE - White Cement Based, High Polymer Modified, Tile/Stone Adhesive",
    description: "LX-4 WHITE is a high-performance, polymer-modified, white cement-based adhesive for low-porosity tiles (vitrified, semi-vitrified) and natural stones, suitable for both interior and exterior floors, and interior walls. It provides excellent bond strength, water resistance, and ease of use, ideal for showers, wet areas, and swimming pools. The white cement base ensures the aesthetic appeal of light-colored tiles and stones is preserved.",
    altText: "LX-4 WHITE White Color Adhesive for Tiles & Marbles",
    accordionItems: [
      {
        title: "KEY FEATURES AND BENEFITS",
        content: (
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>Superior Bond Strength:</strong> Exceeds EN & ISO C2TES1 classification for shear bond strength, ensuring a durable and long-lasting installation</p>
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
      },
      {
        title: "SUBSTRATES",
        content: (
          <ul className="space-y-3">
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
              <p>Cement Plaster (roughened)</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Existing Vitrified & Ceramic Tiles (cleaned & roughened)</p>
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
              <p>Cement Terrazzo (roughened)</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Existing Natural Stone (cleaned & roughened)</p>
            </li>
          </ul>
        )
      },
      {
        title: "APPLICATION",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Interior and Exterior floor & wall installations – Interiors</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Tile-on-tile applications</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Bathroom tiling</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p>Up to 12mm bed thickness</p>
            </li>
          </ul>
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
              <p><strong>IS 15477:2019 Type:</strong> 4T</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-xs">✓</span>
              </span>
              <p><strong>EN 12004 / ISO 13007:</strong> C2TES1</p>
            </li>
          </ul>
        )
      },
      {
        title: "PERFORMANCE PROPERTIES : (LX-4 Adhesive mixed with Water):",
        content: (
          <p>
            This adhesive mortar conforms to IS 15477: 2019 - Type 4T Adhesive.
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
              <p><strong>PACKAGING :</strong> 20 kg bag Available in White with the name of LX-4</p>
            </li>
          </ul>
        )
      }
    ],
  };

  return <ProductPageTemplate {...lx4WhiteConfig} />;
};

export default LX4WhiteProductPage;
