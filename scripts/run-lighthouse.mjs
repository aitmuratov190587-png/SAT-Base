import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'node:fs';

async function run() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'mobile',
    screenEmulation: {
      mobile: true,
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      disabled: false
    },
    throttlingMethod: 'simulate'
  };

  console.log('Running mobile Lighthouse audit on http://127.0.0.1:4173/welcome ...');
  const runnerResult = await lighthouse('http://127.0.0.1:4173/welcome', options);

  const report = runnerResult.lhr;
  const scores = {
    performance: Math.round((report.categories.performance?.score || 0) * 100),
    accessibility: Math.round((report.categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((report.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((report.categories.seo?.score || 0) * 100),
    lcp: report.audits['largest-contentful-paint']?.displayValue,
    cls: report.audits['cumulative-layout-shift']?.displayValue,
    fcp: report.audits['first-contentful-paint']?.displayValue,
    tbt: report.audits['total-blocking-time']?.displayValue,
  };

  console.log('--- LIGHTHOUSE MOBILE SCORES ---');
  console.log('Performance:', scores.performance);
  console.log('Accessibility:', scores.accessibility);
  console.log('Best Practices:', scores.bestPractices);
  console.log('SEO:', scores.seo);
  console.log('LCP (Largest Contentful Paint):', scores.lcp);
  console.log('CLS (Cumulative Layout Shift):', scores.cls);
  console.log('FCP (First Contentful Paint):', scores.fcp);
  console.log('TBT (Total Blocking Time):', scores.tbt);

  fs.writeFileSync('scratch/lighthouse-result.json', JSON.stringify(scores, null, 2));

  await chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Lighthouse audit error:', err);
  process.exit(1);
});
