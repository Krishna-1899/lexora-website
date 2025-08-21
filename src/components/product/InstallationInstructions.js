import React, { useState } from 'react';
import { FaChevronRight, FaCheck } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import offerBg from '../../assets/images/backgrounds/projects-bg-2.jpg';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`w-full text-left py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-between group ${
        isActive 
          ? 'bg-kajaria-blue-600 text-white' 
          : 'text-white hover:bg-white hover:bg-opacity-10'
      }`}
      onClick={onClick}
    >
      <span>{label}</span>
      <FaChevronRight className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
    </button>
  );
};

const TabContent = ({ children, isActive }) => {
  return (
    <div className={`transition-all duration-300 ${isActive ? 'block' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

const InstructionList = ({ items, title }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-kajaria-brown-900 mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-kajaria-blue-600 rounded-full flex items-center justify-center mt-1">
              <FaCheck className="text-white text-xs" />
            </div>
            <p className="text-gray-700 leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InstallationInstructions = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${offerBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-kajaria-brown-900 bg-opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <SectionHeader 
            tagline="Installation"
            title="Installation<br/>Instructions"
            className="text-white"
            centered={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tab Buttons */}
          <div 
            className="lg:col-span-1 bg-kajaria-brown-900 bg-opacity-70 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${offerBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-kajaria-brown-900 bg-opacity-80 h-full">
              {tabs.map((tab, index) => (
                <TabButton
                  key={index}
                  label={tab.label}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-3">
            {tabs.map((tab, index) => (
              <TabContent key={index} isActive={activeTab === index}>
                <InstructionList 
                  title={tab.label}
                  items={tab.content}
                />
              </TabContent>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-white bg-opacity-95 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-kajaria-brown-900 mb-3">
            Disclaimer:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This technical data sheet is provided for informational purposes only. The information contained herein is based on our technical knowledge and experience. However, due to variations in field conditions, we recommend conducting preliminary tests to ensure product suitability for a specific application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallationInstructions;
