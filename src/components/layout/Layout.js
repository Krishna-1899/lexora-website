import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <div className="page-wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 