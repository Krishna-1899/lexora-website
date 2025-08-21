import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import pageHeaderBg from '../../assets/images/backgrounds/page-header-bg-1-1.png';

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat bg-kajaria-blue-200"
      style={{
        backgroundImage: `url(${pageHeaderBg})`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-kajaria-blue-200"></div> */}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-dm-sans">
          {title}
        </h1>
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-white">
          <Link 
            to="/" 
            className="flex items-center hover:text-kajaria-blue-300 transition-colors duration-300"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-kajaria-blue-300">/</span>
              {item.link ? (
                <Link 
                  to={item.link}
                  className="hover:text-kajaria-blue-300 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-kajaria-blue-300">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
