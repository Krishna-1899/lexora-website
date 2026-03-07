/**
 * Renders a PDF to an array of image data URLs (one per page) using pdf.js.
 * Used by PdfFlipBook to show PDF with flip animation.
 */
import { pdfjs } from 'react-pdf';

// ── Polyfills for pdfjs-dist v5 on older mobile browsers (Chrome < 120, Safari < 17.4) ──

// Promise.withResolvers  (Chrome 119+)
if (typeof Promise.withResolvers === 'undefined') {
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
    return { promise, resolve, reject };
  };
}

// URL.parse  (Chrome 120+)
if (typeof URL.parse === 'undefined') {
  URL.parse = function (url, base) {
    try { return new URL(url, base); } catch { return null; }
  };
}

// structuredClone  (Chrome 98+, but missing on some older Android WebViews)
if (typeof structuredClone === 'undefined') {
  window.structuredClone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
  };
}

// Configure worker for Create React App (no import.meta)
if (typeof window !== 'undefined' && pdfjs?.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

const RENDER_SCALE = 2; // Quality of rendered page images

/**
 * Load a PDF from URL and return an array of image data URLs, one per page.
 * @param {string} pdfUrl - URL or path to the PDF file
 * @param {(loaded: number, total: number) => void} [onProgress] - optional progress callback
 * @returns {Promise<{ images: string[], numPages: number }>}
 */
export async function pdfToImages(pdfUrl, onProgress) {
  const pdf = await pdfjs.getDocument(pdfUrl).promise;
  const numPages = pdf.numPages;
  const images = [];

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: RENDER_SCALE });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const outputScale = window.devicePixelRatio || 1;

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + 'px';
    canvas.style.height = Math.floor(viewport.height) + 'px';

    const renderContext = {
      canvasContext: context,
      viewport,
      transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null,
    };
    await page.render(renderContext).promise;

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85); // JPEG for smaller size / faster render
    images.push(dataUrl);

    if (typeof onProgress === 'function') onProgress(pageNum, numPages);
  }

  return { images, numPages };
}
