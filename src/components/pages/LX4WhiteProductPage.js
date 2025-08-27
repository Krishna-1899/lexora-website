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
  };

  return <ProductPageTemplate {...lx4WhiteConfig} />;
};

export default LX4WhiteProductPage;
