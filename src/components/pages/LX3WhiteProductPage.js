import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const LX3WhiteProductPage = () => {
  // Get LX-3 configuration and modify it for LX-3 WHITE
  const lx3Config = productConfigurations['lx-3'];
  
  const lx3WhiteConfig = {
    ...lx3Config,
    pageTitle: "LX-3 WHITE - White Cement Based, High Performance Tile Adhesive",
    breadcrumbs: [{ label: 'LX-3 WHITE', link: null }],
    productName: "LX-3 WHITE - White Cement Based, High Performance Tile Adhesive",
    description: "LX-3 WHITE is a high-performance, polymer-modified, white cement-based adhesive specifically designed for fixing low-porosity tiles (vitrified, semi-vitrified) and natural stones on interior and exterior floors, walls-interiors, and even swimming pools. It offers exceptional bond strength, water resistance, and ease of use. The white cement base preserves the aesthetic appeal of light-colored tiles and stones.",
    altText: "LX-3 WHITE White Color Adhesive for Tiles & Marbles",
  };

  return <ProductPageTemplate {...lx3WhiteConfig} />;
};

export default LX3WhiteProductPage;
