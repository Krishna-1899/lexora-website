import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import ProductDetails from './ProductDetails';
import InstallationInstructions from './InstallationInstructions';
import Accordion from '../ui/Accordion';
import SectionHeader from '../ui/SectionHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PUA100ProductPageTemplate = ({
  pageTitle,
  breadcrumbs,
  productName,
  productSubtitle,
  productImage,
  description,
  tdsLink,
  dealerLink,
  altText,
  accordionItems,
  installationTabs,
  workingPropertiesISO,
  workingPropertiesIS,
  technicalNote,
  precautionsAndNotes,
  coverage,
  packaging,
  shelfLife,
  grouting,
  safetyPrecautions,
  disclaimer
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

  // Prepare data for the common ProductDetails component
  const productDetailsProps = {
    productName: productSubtitle, // Use subtitle as the main product name
    productImage,
    description,
    tdsLink,
    dealerLink,
    altText
  };

  return (
    <Layout>
      {/* Page Header - Common */}
      <PageHeader 
        title={pageTitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Product Details Section - Common */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <ProductDetails {...productDetailsProps} />
      </div>

      {/* Accordion Section - Common */}
      {accordionItems && accordionItems.length > 0 && (
        <section className="py-16 bg-kajaria-blue-50" data-aos="fade-up" data-aos-duration="1000">
          <div className="container mx-auto px-4">
            <Accordion items={accordionItems} defaultActiveIndex={0} />
          </div>
        </section>
      )}

      {/* Installation Instructions - Common */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <InstallationInstructions installationTabs={installationTabs} />
      </div>

      {/* Working Properties */}
      <section className="section-space bg-gray-100" data-aos="fade-up" data-aos-duration="1000">
        <div className="container mx-auto px-4">
          <SectionHeader 
            tagline="Properties"
            title="Working Properties"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ISO Properties */}
            <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-right" data-aos-duration="1000">
              <h4 className="text-lg font-semibold mb-4">
                Performance Properties (as per ISO 13007 & EN 12004 – R2T)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Test</th>
                      <th className="border border-gray-300 p-3 text-left">Requirement</th>
                      <th className="border border-gray-300 p-3 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workingPropertiesISO.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3">{row.test}</td>
                        <td className="border border-gray-300 p-3">{row.requirement}</td>
                        <td className="border border-gray-300 p-3">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* IS Properties */}
            <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-left" data-aos-duration="1000">
              <h4 className="text-lg font-semibold mb-4">
                Performance Properties (as per IS 15477:2019 – Type 5 'T S2')
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Test</th>
                      <th className="border border-gray-300 p-3 text-left">Requirement</th>
                      <th className="border border-gray-300 p-3 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workingPropertiesIS.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3">{row.test}</td>
                        <td className="border border-gray-300 p-3">{row.requirement}</td>
                        <td className="border border-gray-300 p-3">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {technicalNote && (
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4" data-aos="fade-up" data-aos-delay="200">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> {technicalNote}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-space" data-aos="fade-up" data-aos-duration="1000">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
              {precautionsAndNotes && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Precautions & Notes
                  </h4>
                  <ul className="space-y-2">
                    {precautionsAndNotes.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {coverage && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Coverage
                  </h4>
                  <ul className="space-y-2">
                    {coverage.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
              {packaging && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Packaging
                  </h4>
                  <p className="text-gray-700">{packaging}</p>
                </div>
              )}

              {shelfLife && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Shelf Life
                  </h4>
                  <p className="text-gray-700">{shelfLife}</p>
                </div>
              )}

              {grouting && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Grouting
                  </h4>
                  <p className="text-gray-700">{grouting}</p>
                </div>
              )}

              {safetyPrecautions && (
                <div>
                  <h4 className="text-xl font-semibold text-kajaria-brown-900 mb-4">
                    Safety Precautions
                  </h4>
                  <ul className="space-y-2">
                    {safetyPrecautions.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {disclaimer && (
            <div className="mt-8 bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <p className="text-sm text-gray-600">
                <strong>Disclaimer:</strong> {disclaimer}
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PUA100ProductPageTemplate;
