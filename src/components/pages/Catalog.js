import React from 'react';
import Layout from '../layout/Layout';
import pdf from '../../assets/images/menu/LEXORA.pdf';
import PDFFlipBook from '../ui/PdfFlipBook.js';

const Catalog = () => (
  <Layout>
    <PDFFlipBook pdfUrl={pdf} title="LEXORA CHEMBOND" />
  </Layout>
);

export default Catalog;
