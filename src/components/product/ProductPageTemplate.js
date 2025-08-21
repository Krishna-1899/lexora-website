import React from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import ProductDetails from './ProductDetails';
import Accordion from '../ui/Accordion';
import MethodOfApplication from './MethodOfApplication';
import TechnicalData from './TechnicalData';
import InstallationInstructions from './InstallationInstructions';
import ProductFAQ from './ProductFAQ';

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
  return (
    <Layout>
      {/* Page Header */}
      <PageHeader 
        title={pageTitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Product Details */}
      <ProductDetails 
        productName={productName}
        productImage={productImage}
        description={description}
        tdsLink={tdsLink}
        dealerLink={dealerLink}
        altText={altText}
      />

      {/* Product Specifications Accordion */}
      {accordionItems && accordionItems.length > 0 && (
        <section className="py-16 bg-kajaria-blue-50">
          <div className="container mx-auto px-4">
            <Accordion items={accordionItems} defaultActiveIndex={0} />
          </div>
        </section>
      )}

      {/* Method of Application */}
      {applicationSteps && applicationSteps.length > 0 && (
        <MethodOfApplication steps={applicationSteps} />
      )}

      {/* Technical Data */}
      {(technicalSpecs || isData) && (
        <TechnicalData 
          technicalSpecs={technicalSpecs}
          isData={isData}
          coverage={coverage}
          images={technicalImages}
        />
      )}

      {/* Installation Instructions */}
      {installationTabs && installationTabs.length > 0 && (
        <InstallationInstructions tabs={installationTabs} />
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <ProductFAQ faqs={faqs} />
      )}
    </Layout>
  );
};

export default ProductPageTemplate;
