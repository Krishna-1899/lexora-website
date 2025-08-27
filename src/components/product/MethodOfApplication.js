import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const MethodStep = ({ stepNumber, image, description, altText }) => {
  return (
    <div className="rounded-lg overflow-hidden transition-shadow duration-300">
      <div className="flex items-center justify-center">
        <img 
          src={image} 
          alt={altText}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start space-x-3">
          {/* <div className="flex-shrink-0 w-8 h-8 bg-kajaria-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
            {stepNumber}
          </div> */}
          <p className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const MethodOfApplication = ({ steps = [] }) => {
  return (
    <section className="py-16 bg-kajaria-blue-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          tagline="Method"
          title="Method of Application"
          centered
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-7 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <MethodStep
                stepNumber={index + 1}
                image={step.image}
                description={step.description}
                altText={step.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodOfApplication;
