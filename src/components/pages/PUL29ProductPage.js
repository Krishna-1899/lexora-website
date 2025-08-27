import React from 'react';
import PUL29ProductPageTemplate from '../product/PUL29ProductPageTemplate';
import { pul29Configuration } from '../../data/pul29Data';

const PUL29ProductPage = () => {
  return (
    <PUL29ProductPageTemplate {...pul29Configuration} />
  );
};

export default PUL29ProductPage;
