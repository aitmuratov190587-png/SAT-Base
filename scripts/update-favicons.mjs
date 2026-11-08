import fs from 'fs';

const iconBuffer = fs.readFileSync('public/images/satbase-icon.png');
const iconBase64 = iconBuffer.toString('base64');

// Create high-res SVG favicon with the squircle logo icon
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,${iconBase64}" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
fs.copyFileSync('public/images/satbase-icon.png', 'public/favicon.ico');
fs.copyFileSync('public/images/satbase-icon.png', 'public/favicon-32x32.png');
fs.copyFileSync('public/images/satbase-icon.png', 'public/apple-touch-icon.png');

console.log('Successfully updated public/favicon.svg, favicon.ico, favicon-32x32.png, apple-touch-icon.png');
