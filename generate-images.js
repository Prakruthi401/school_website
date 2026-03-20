const fs = require('fs');
const path = require('path');

// Simple SVG placeholder generator
function createSVGPlaceholder(filename, width, height, text, bgColor = '#FFEEDD') {
    const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <rect x="2" y="2" width="${width - 4}" height="${height - 4}" stroke="#E6B422" stroke-width="4" fill="none"/>
  <text x="${width/2}" y="${height/2}" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 10}" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="#1A1A1A">${text}</text>
</svg>`;
    
    const filepath = path.join(__dirname, filename);
    fs.writeFileSync(filepath, svg);
    console.log(`Created: ${filepath}`);
}

// Create directories
const dirs = ['images', 'images/gallery'];
dirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

// Generate placeholder images
const placeholders = [
    // Main images
    { name: 'images/logo.svg', width: 200, height: 50, text: 'Akshardhama Logo' },
    { name: 'images/hero-classroom.jpg', width: 800, height: 600, text: 'Hero Classroom' },
    { name: 'images/playschool.jpg', width: 400, height: 300, text: 'Playschool' },
    { name: 'images/lkg.jpg', width: 400, height: 300, text: 'LKG Class' },
    { name: 'images/ukg.jpg', width: 400, height: 300, text: 'UKG Class' },
    { name: 'images/playschool-detail.jpg', width: 400, height: 300, text: 'Playschool Detail' },
    { name: 'images/lkg-detail.jpg', width: 400, height: 300, text: 'LKG Detail' },
    { name: 'images/ukg-detail.jpg', width: 400, height: 300, text: 'UKG Detail' },
    { name: 'images/about-classroom.jpg', width: 600, height: 400, text: 'About Classroom' },
    { name: 'images/teacher-1.jpg', width: 300, height: 300, text: 'Teacher 1' },
    { name: 'images/teacher-2.jpg', width: 300, height: 300, text: 'Teacher 2' },
    { name: 'images/teacher-3.jpg', width: 300, height: 300, text: 'Teacher 3' },
    { name: 'images/facility-1.jpg', width: 400, height: 300, text: 'Facility 1' },
    { name: 'images/facility-2.jpg', width: 400, height: 300, text: 'Facility 2' },
    
    // Gallery images
    { name: 'images/gallery/classroom-1.jpg', width: 400, height: 300, text: 'Classroom 1' },
    { name: 'images/gallery/playground-1.jpg', width: 400, height: 300, text: 'Playground 1' },
    { name: 'images/gallery/art-1.jpg', width: 400, height: 300, text: 'Art Activity' },
    { name: 'images/gallery/story-time.jpg', width: 400, height: 300, text: 'Story Time' },
    { name: 'images/gallery/science.jpg', width: 400, height: 300, text: 'Science Activity' },
    { name: 'images/gallery/festival.jpg', width: 400, height: 300, text: 'Festival' },
    { name: 'images/gallery/outdoor-play.jpg', width: 400, height: 300, text: 'Outdoor Play' },
    { name: 'images/gallery/learning-centers.jpg', width: 400, height: 300, text: 'Learning Centers' },
    { name: 'images/gallery/music.jpg', width: 400, height: 300, text: 'Music Class' },
    { name: 'images/gallery/sports-day.jpg', width: 400, height: 300, text: 'Sports Day' },
    { name: 'images/gallery/teachers.jpg', width: 400, height: 300, text: 'Teachers' },
    { name: 'images/gallery/drama.jpg', width: 400, height: 300, text: 'Drama Class' },
    
    // Other images
    { name: 'images/video-thumbnail.jpg', width: 800, height: 450, text: 'Video Thumbnail' },
    { name: 'images/map-placeholder.jpg', width: 800, height: 400, text: 'Map Location' }
];

// Generate all placeholders
placeholders.forEach(placeholder => {
    createSVGPlaceholder(placeholder.name, placeholder.width, placeholder.height, placeholder.text);
});

console.log('All placeholder images generated successfully!');
