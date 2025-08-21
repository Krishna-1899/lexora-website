import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const VX1ProductPage = () => {
  const config = productConfigurations['lx-3'];
  
  return (
    <ProductPageTemplate {...config} />
  );
};

export default VX1ProductPage;
