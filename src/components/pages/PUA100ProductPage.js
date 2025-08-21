import React from 'react';
import PUA100ProductPageTemplate from '../product/PUA100ProductPageTemplate';
import { pua100Configuration } from '../../data/pua100Data';

const PUA100ProductPage = () => {
  return (
    <PUA100ProductPageTemplate {...pua100Configuration} />
  );
};

export default PUA100ProductPage;
