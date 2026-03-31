/**
 * Renders a PDF to images using pdf.js.
 * Supports progressive loading: first N pages render immediately so the
 * flipbook can open fast, remaining pages render silently in the background.
 */
import { pdfjs } from 'react-pdf';

// pdfjs-dist v3 — works on all mobile browsers
if (typeof window !== 'undefined' && pdfjs?.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}

// Cap DPR at 1 — the biggest mobile performance win.
// Before: RENDER_SCALE=2 × DPR=3 = 6× res = 36× more pixels per page to process.
// Now:    RENDER_SCALE=2 × DPR=1 = 2× res = 4× pixels — sharp but fast.
const RENDER_SCALE = 2;
const MAX_OUTPUT_SCALE = 1; // Never multiply by device pixel ratio

// 1×1 white JPEG placeholder used for pages not yet rendered
const BLANK_PAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8U' +
  'HRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwh' +
  'MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAB' +
  'AAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAU' +
  'AQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k=';

/**
 * Render a single PDF page to a JPEG data URL.
 */
async function renderPage(pdf, pageNum) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: RENDER_SCALE });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const outputScale = Math.min(window.devicePixelRatio || 1, MAX_OUTPUT_SCALE);

  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);

  await page.render({
    canvasContext: context,
    viewport,
    transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null,
  }).promise;

  return canvas.toDataURL('image/jpeg', 0.82);
}

/**
 * Load a PDF and return images progressively.
 *
 * @param {string} pdfUrl
 * @param {(loaded: number, total: number) => void} [onProgress]
 * @param {(index: number, dataUrl: string) => void} [onPageReady]
 *   Called for every page as it finishes — lets the UI update a single page
 *   without waiting for the whole PDF.
 * @param {number} [eagerPages=4]
 *   How many pages to render before resolving the promise (flipbook opens fast).
 *   Remaining pages continue rendering in the background via onPageReady.
 * @returns {Promise<{ images: string[], numPages: number }>}
 */
export async function pdfToImages(pdfUrl, onProgress, onPageReady, eagerPages = 4) {
  const pdf = await pdfjs.getDocument(pdfUrl).promise;
  const numPages = pdf.numPages;

  // Pre-fill array with blank placeholders so the flipbook has the right page count
  const images = Array(numPages).fill(BLANK_PAGE);

  // Render the first `eagerPages` pages synchronously so we can open the flipbook fast
  for (let i = 0; i < Math.min(eagerPages, numPages); i++) {
    images[i] = await renderPage(pdf, i + 1);
    if (typeof onProgress === 'function') onProgress(i + 1, numPages);
    if (typeof onPageReady === 'function') onPageReady(i, images[i]);
  }

  // Return early — flipbook can now open with real first pages + blank placeholders
  const result = { images, numPages };

  // Render remaining pages in the background (non-blocking)
  if (numPages > eagerPages) {
    (async () => {
      for (let i = eagerPages; i < numPages; i++) {
        images[i] = await renderPage(pdf, i + 1);
        if (typeof onProgress === 'function') onProgress(i + 1, numPages);
        if (typeof onPageReady === 'function') onPageReady(i, images[i]);
        // Small yield so the UI thread isn't starved
        await new Promise((r) => setTimeout(r, 0));
      }
    })();
  }

  return result;
}
