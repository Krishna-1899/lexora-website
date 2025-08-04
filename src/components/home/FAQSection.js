import React, { useState } from 'react';
import Container from '../ui/Container';
import { FiChevronDown } from 'react-icons/fi';
import faqImage1 from '../../assets/images/faq/faq-1-1.jpg';
import faqImage2 from '../../assets/images/faq/faq-1-2.webp';
import expertiseImage1 from '../../assets/images/expertise/expertise-1-1.webp';
import expertiseImage2 from '../../assets/images/expertise/expertise-1-2.webp';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      id: 1,
      question: "Why is Gresbond considered one of India's Best Tile Fixing Brands?",
      answer: "Being from the house of Kajaria (India's No. Tile Company), Gresbond offers a premium range of tile and stone fixing solutions - Tile Adhesives, Grouts, and Cleaners. All the products are tried, tested, and professionally designed to meet the diverse needs of both residential and commercial tiling projects."
    },
    {
      id: 2,
      question: "What types of products does Gresbond offer?",
      answer: "We offer a comprehensive range of tile adhesives and grouts that ensure a long-lasting bond and aesthetic beauty. Regarding tile adhesives, we manufacture high-quality white and grey adhesives for ceramic, vitrified, and outdoor tiles. These adhesives are also well-suited for stone, marble, and granite. We have 12 vibrant shades of epoxy Grouts for interior and exterior tiling needs."
    },
    {
      id: 3,
      question: "How does Gresbond by Kajaria ensure the quality of its products?",
      answer: "Each product undergoes rigorous laboratory testing to meet and exceed industry standards. From the Kajaria house, Gresbond always strives for excellence, quality, and commitment to delivering top-notch solutions. We have a vast team of research experts to improve the product's overall quality."
    },
    {
      id: 4,
      question: "Are Gresbond tile adhesives and grouts Versatile in applications?",
      answer: "Gresbond offers comprehensive solutions for walls, floors, and roofs for residential and commercial tiling projects. Whether you're renovating your home or working on a large-scale commercial development, Gresbond products, including ceramic, porcelain, natural stone, glass, and mosaic tiles, are designed to meet your tiling needs."
    },
    {
      id: 5,
      question: "How do I choose the right products for my project?",
      answer: "Consider factors like the type of tiles, substrate, location (indoor/outdoor), and specific project requirements. Gresbond's product descriptions provide detailed guidance. VX1 and VX2 are specially designed for vitrified tiles, while the CX range of tile adhesives is for ceramic tiles. EX-5 is specially manufactured for Outdoor tiling projects. Likewise, KE 100 grouts are for regular tiling projects, while KE 100 Duet can be used for commercial projects. Follow our detailed guide to check the right products for your tiling projects."
    },
    {
      id: 6,
      question: "Where can I buy Gresbond products?",
      answer: "Gresbond products are available through a vast dealer network across India. Visit our dealer locator page for more information."
    },
    {
      id: 7,
      question: "What are the best adhesives for tile fixing?",
      answer: "Gresbond offers a variety of adhesives tailored for different surfaces, including waterproof floor tile adhesives and specialized wall tile fixing chemicals."
    },
    {
      id: 8,
      question: "Can Gresbond adhesives be used for tile-on-tile applications?",
      answer: "Gresbond adhesives are designed for fresh installations and tile-on-tile projects, ensuring a solid bond and durability."
    },
    {
      id: 9,
      question: "Are Gresbond products suitable for both residential and commercial use?",
      answer: "Absolutely. Gresbond's advanced technology meets the demands of both residential and commercial projects, offering reliability and superior performance."
    },
    {
      id: 10,
      question: "How long does it take for Gresbond adhesives to set?",
      answer: "Gresbond adhesives are typically set within 24 hours, allowing for a quick and efficient tiling process."
    },
    {
      id: 11,
      question: "Do Gresbond adhesives meet international standards?",
      answer: "All Gresbond products are developed to meet and exceed Indian and international technical standards."
    },
    {
      id: 12,
      question: "What makes Gresbond different from other adhesive brands?",
      answer: "Gresbond combines Kajaria's unrivaled expertise in tiles with cutting-edge technology, ensuring high bond strength, ease of use, and versatility for various tiling needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-space bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Images */}
          <div data-aos="fade-left" data-aos-duration="1500">
            <div className="faq-one__image faqgridgalary relative">
              <div className="faq-one__image__inner grid grid-cols-2 gap-4">
                <img 
                  src={faqImage1}
                  alt="faq" 
                  className="faq-one__image__one w-full h-auto rounded-lg shadow-lg"
                />
                <img 
                  src={faqImage2}
                  alt="faq" 
                  className="faq-one__image__two w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Expertise Images */}
            <div className="expertise-one__images-grid grid grid-cols-2 gap-4 mt-6">
              <div className="expertise-one__image expertise-one__image--one">
                <img 
                  src={expertiseImage1}
                  alt="expertise" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="expertise-one__image expertise-one__image--two">
                <img 
                  src={expertiseImage2}
                  alt="expertise" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
            <div className="faq-one__content">
              {/* Section Title */}
              <div className="sec-title sec-title--border mb-8">
                <h6 className="sec-title__tagline">Our FAQ</h6>
                <h3 className="sec-title__title">Frequently Asked <br /> Questions ?</h3>
              </div>

              {/* FAQ Accordion */}
              <div className="faq-accordion floens-accordion homepagefaq">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="accordion mb-4">
                    <div 
                      className="accordion-title bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 transition-colors duration-300 rounded-lg"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h4 className="flex justify-between items-center text-gray-800 font-medium">
                        {faq.question}
                        <span className={`accordion-title__icon transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                          <FiChevronDown className="text-xl text-kajaria-blue-700" />
                        </span>
                      </h4>
                    </div>
                    
                    <div className={`accordion-content overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="inner p-4 pt-2">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection; 