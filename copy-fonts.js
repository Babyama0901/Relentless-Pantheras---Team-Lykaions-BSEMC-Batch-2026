// Run this once to copy brand fonts to Next.js public directory
// Usage: node copy-fonts.js

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'Webfonts');
const dest = path.join(__dirname, 'public', 'Webfonts');

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true });
}

const fonts = fs.readdirSync(src);
fonts.forEach((font) => {
  const from = path.join(src, font);
  const to = path.join(dest, font);
  fs.copyFileSync(from, to);
  console.log(`✓ Copied: ${font}`);
});

console.log('\n✅ All brand fonts copied to public/Webfonts/');
