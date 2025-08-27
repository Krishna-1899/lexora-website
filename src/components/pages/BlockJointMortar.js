import React from 'react';
import ProductPageTemplate from '../product/ProductPageTemplate';
import { productConfigurations } from '../../data/productData';

const BlockJointMortarProductPage = () => {
  const config = productConfigurations['block-jointing-mortar'];

  return (
    <ProductPageTemplate {...config} />
  );
};

export default BlockJointMortarProductPage;
