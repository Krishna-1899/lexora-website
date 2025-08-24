import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import ProductDetails from './ProductDetails';
import Accordion from '../ui/Accordion';
import MethodOfApplication from './MethodOfApplication';
import TechnicalData from './TechnicalData';
import InstallationInstructions from './InstallationInstructions';
import ProductFAQ from './ProductFAQ';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductPageTemplate = ({
  // Page Header Props
  pageTitle,
  breadcrumbs,
  
  // Product Details Props
  productName,
  productImage,
  description,
  tdsLink,
  dealerLink,
  altText,
  
  // Accordion Props
  accordionItems,
  
  // Method of Application Props
  applicationSteps,
  
  // Technical Data Props
  technicalSpecs,
  isData,
  coverage,
  technicalImages,
  
  // Installation Instructions Props
  installationTabs,
  
  // FAQ Props
  faqs
}) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 100
    });
    
    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <PageHeader 
        title={pageTitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Product Details */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <ProductDetails 
          productName={productName}
          productImage={productImage}
          description={description}
          tdsLink={tdsLink}
          dealerLink={dealerLink}
          altText={altText}
        />
      </div>

      {/* Product Specifications Accordion */}
      {accordionItems && accordionItems.length > 0 && (
        <section className="py-16 bg-kajaria-blue-50" data-aos="fade-up" data-aos-duration="1000">
          <div className="container mx-auto px-4">
            <Accordion items={accordionItems} defaultActiveIndex={0} />
          </div>
        </section>
      )}

      {/* Method of Application */}
      {applicationSteps && applicationSteps.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <MethodOfApplication steps={applicationSteps} />
        </div>
      )}

      {/* Technical Data */}
      {(technicalSpecs || isData) && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <TechnicalData 
            technicalSpecs={technicalSpecs}
            isData={isData}
            coverage={coverage}
            images={technicalImages}
          />
        </div>
      )}

      {/* Installation Instructions */}
      {installationTabs && installationTabs.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <InstallationInstructions tabs={installationTabs} />
        </div>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <ProductFAQ faqs={faqs} />
        </div>
      )}
    </Layout>
  );
};

export default ProductPageTemplate;
