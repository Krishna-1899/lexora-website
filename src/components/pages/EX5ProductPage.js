import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const EX5ProductPage = () => {
  const config = productConfigurations['ex-5'];

  return (
    <ProductPageTemplate {...config} />
  );
};

export default EX5ProductPage;
