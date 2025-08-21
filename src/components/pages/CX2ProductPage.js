import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const CX2ProductPage = () => {
  const config = productConfigurations['lx-2'];
  
  return (
    <ProductPageTemplate {...config} />
  );
};

export default CX2ProductPage;