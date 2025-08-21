import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const CX1ProductPage = () => {
  const config = productConfigurations['lx-1'];

  return (
    <ProductPageTemplate {...config} />
  );
};

export default CX1ProductPage;
