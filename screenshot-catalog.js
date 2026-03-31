const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:3001/catalog', { waitUntil: 'networkidle0' });
  
  // Wait for flipbook pages to appear (up to 15 seconds)
  await page.waitForSelector('.pdf-flip-book-outer .page, .catalog-book-wrap', { timeout: 15000 });
  
  // Extra wait for images to render
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: 'catalog-screenshot.png', fullPage: false });
  await browser.close();
  console.log('Screenshot saved to catalog-screenshot.png');
})();
