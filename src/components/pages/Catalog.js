import React from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import pdf from '../../assets/images/menu/LEXORA CHEMBOND.pdf';
import PDFFlipBook from '../ui/PdfFlipBook.js';
const Catalog = () => {
  const pdfUrl = pdf;

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
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-kajaria-blue-900 mb-4">
                LEXORA Product Catalog
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our comprehensive range of tile adhesives and construction solutions
              </p>
            </div>
            
            {/* PDF Viewer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-kajaria-blue-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-kajaria-blue-900">
                  LEXORA CHEMBOND Catalog
                </h3>
              </div>
              
              <div className="w-full">
                <PDFFlipBook pdfUrl={pdfUrl} />
              </div>
              
              {/* Download Button */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-600">
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
