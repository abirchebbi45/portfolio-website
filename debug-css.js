#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Debugging Tailwind CSS build...\n');

// Check dist directory
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('✅ dist/ directory exists');
  
  const distContents = fs.readdirSync(distPath);
  console.log('📁 dist/ contents:', distContents);
  
  // Check assets directory
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const assetsContents = fs.readdirSync(assetsPath);
    console.log('📁 assets/ contents:', assetsContents);
    
    // Find CSS file
    const cssFile = assetsContents.find(file => file.endsWith('.css'));
    if (cssFile) {
      const cssPath = path.join(assetsPath, cssFile);
      const cssStats = fs.statSync(cssPath);
      console.log(`📄 CSS file: ${cssFile}`);
      console.log(`📊 CSS size: ${(cssStats.size / 1024).toFixed(2)} KB`);
      
      // Read first 500 characters of CSS
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      console.log('\n🎨 CSS preview (first 500 chars):');
      console.log(cssContent.substring(0, 500) + '...');
      
      // Check for Tailwind classes
      const hasTailwindClasses = cssContent.includes('--tw-') && cssContent.includes('.bg-');
      console.log(`🎯 Contains Tailwind classes: ${hasTailwindClasses ? '✅' : '❌'}`);
    }
  }
} else {
  console.log('❌ dist/ directory does not exist');
}

// Check configuration files
console.log('\n🔧 Configuration files:');
const configFiles = ['tailwind.config.ts', 'postcss.config.js', 'vite.config.vercel.ts'];
configFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🌐 Environment variables:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`CI: ${process.env.CI}`);
console.log(`VERCEL: ${process.env.VERCEL}`);
