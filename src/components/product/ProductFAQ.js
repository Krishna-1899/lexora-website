import React from 'react';
import Accordion from '../ui/Accordion';
import faqImage from '../../assets/images/faq/faq-1-2.webp';

const ProductFAQ = ({ faqs = [] }) => {
  const faqItems = faqs.map(faq => ({
    title: faq.question,
    content: (
      <div>
        <p className="text-gray-700 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    )
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 font-dm-sans">
            Frequently Asked Questions
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Image */}
          <div className="flex justify-center">
            <div className="max-w-md">
              <img 
                src={faqImage} 
                alt="FAQ" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion 
              items={faqItems}
              defaultActiveIndex={2} // Third item active by default (matching original)
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
