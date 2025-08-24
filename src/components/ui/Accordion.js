import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ title, children, isActive, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        className="w-full py-4 px-6 flex justify-between items-center text-left focus:outline-none group bg-white hover:bg-gray-50 transition-colors duration-300"
        onClick={onToggle}
      >
        <h4 className="text-lg md:text-xl font-semibold text-kajaria-blue-900 group-hover:text-kajaria-blue-600 transition-colors duration-300 pr-4">
          {title}
        </h4>
        <div className="flex-shrink-0">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isActive 
              ? 'bg-kajaria-blue-600 border-kajaria-blue-600 text-white' 
              : 'bg-white border-kajaria-blue-600 text-kajaria-blue-600 group-hover:bg-kajaria-blue-600 group-hover:text-white'
          }`}>
            {isActive ? (
              <FaMinus className="text-sm" />
            ) : (
              <FaPlus className="text-sm" />
            )}
          </div>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <AccordionItem
            title={item.title}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {item.content}
          </AccordionItem>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
