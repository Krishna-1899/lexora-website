import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import PageHeader from '../ui/PageHeader';
import pdf from '../../assets/images/menu/LEXORA.pdf';
import PDFFlipBook from '../ui/PdfFlipBook.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Catalog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: true, offset: 100 });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Product Catalog"
        breadcrumbs={[{ label: 'Catalog', link: null }]}
      />

      {/* Catalog Reader — full width, no extra padding */}
      <PDFFlipBook pdfUrl={pdf} title="LEXORA CHEMBOND" />
    </Layout>
  );
};

export default Catalog;
