const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1632759145351-1d592919f522',
    filename: 'denver-roofing-hero.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099',
    filename: 'roof-repair-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605283176568-9b41fde3672e',
    filename: 'roof-repair-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
    filename: 'denver-skyline.jpg'
  }
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download images
images.forEach(image => {
  const filepath = path.join(imagesDir, image.filename);
  https.get(`${image.url}?w=1920&q=80`, response => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${image.filename}`);
      fileStream.close();
    });
  }).on('error', err => {
    console.error(`Error downloading ${image.filename}:`, err.message);
  });
}); 