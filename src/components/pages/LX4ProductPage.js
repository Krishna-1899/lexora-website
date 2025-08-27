import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import {productConfigurations} from '../../data/productData';

const LX4ProductPage = () => {
  return (
    <ProductPageTemplate {...productConfigurations['lx-4']} />
  );
};

export default LX4ProductPage;
