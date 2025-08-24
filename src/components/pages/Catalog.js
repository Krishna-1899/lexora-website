import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import pdf from '../../assets/images/menu/LEXORA CHEMBOND.pdf';
import PDFFlipBook from '../ui/PdfFlipBook.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Catalog = () => {
  const pdfUrl = pdf;

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
        title="Product Catalog"
        breadcrumbs={[{ label: 'Catalog', link: null }]}
      />

      {/* PDF Viewer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-3xl font-bold text-kajaria-blue-900 mb-4" data-aos="fade-up" data-aos-delay="200">
                LEXORA Product Catalog
              </h2>
              <p className="text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="300">
                Explore our comprehensive range of tile adhesives and construction solutions
              </p>
            </div>
            
            {/* PDF Viewer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-kajaria-blue-50 px-6 py-4 border-b border-gray-200" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-lg font-semibold text-kajaria-blue-900">
                  LEXORA CHEMBOND Catalog
                </h3>
              </div>
              
              <div className="w-full" data-aos="fade-up" data-aos-delay="600">
                <PDFFlipBook pdfUrl={pdfUrl} />
              </div>
              
              {/* Download Button */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200" data-aos="fade-up" data-aos-delay="700">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-600" data-aos="fade-up" data-aos-delay="800">
                    Having trouble viewing the PDF? Download it for offline viewing.
                  </p>
                  <a
                    href={pdfUrl}
                    download="LEXORA-CHEMBOND-Catalog.pdf"
                    className="floens-btn inline-flex items-center"
                  >
                    <span>Download Catalog</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
