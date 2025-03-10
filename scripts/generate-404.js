const fs = require('fs');
const path = require('path');

// This script copies the index.html to 404.html to handle client-side routing with GitHub Pages
// Run this script after the build process

const BUILD_DIR = path.join(process.cwd(), 'out');

function copyIndexToNotFound() {
  try {
    // Check if the build directory exists
    if (!fs.existsSync(BUILD_DIR)) {
      console.error('Build directory does not exist. Run "npm run build" first.');
      process.exit(1);
    }

    // Path to the index.html file
    const indexPath = path.join(BUILD_DIR, 'index.html');
    
    // Path to the 404.html file
    const notFoundPath = path.join(BUILD_DIR, '404.html');
    
    // Check if index.html exists
    if (!fs.existsSync(indexPath)) {
      console.error('index.html does not exist in the build directory.');
      process.exit(1);
    }
    
    // Copy index.html to 404.html
    fs.copyFileSync(indexPath, notFoundPath);
    
    console.log('Successfully copied index.html to 404.html');
  } catch (error) {
    console.error('Error copying index.html to 404.html:', error);
    process.exit(1);
  }
}

copyIndexToNotFound(); 