import sharp from 'sharp';

const size = 1024;

const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4C6EF5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B5BDB;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${size}" height="${size}" rx="230" fill="url(#bg)" />

  <!-- Open book shape -->
  <g transform="translate(512, 460)">
    <!-- Left page -->
    <path d="M-240,-160 Q-120,-180 0,-140 L0,180 Q-120,140 -240,160 Z"
          fill="white" opacity="0.95"/>
    <!-- Right page -->
    <path d="M240,-160 Q120,-180 0,-140 L0,180 Q120,140 240,160 Z"
          fill="white" opacity="0.85"/>
    <!-- Spine -->
    <rect x="-8" y="-145" width="16" height="330" rx="4" fill="#3B5BDB" opacity="0.3"/>
    <!-- Lines on left page -->
    <line x1="-200" y1="-80" x2="-30" y2="-95" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.25"/>
    <line x1="-200" y1="-30" x2="-30" y2="-43" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.25"/>
    <line x1="-200" y1="20" x2="-30" y2="9" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.25"/>
    <line x1="-200" y1="70" x2="-30" y2="62" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.25"/>
    <!-- Lines on right page -->
    <line x1="30" y1="-95" x2="200" y2="-80" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="-43" x2="200" y2="-30" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="9" x2="200" y2="20" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.18"/>
    <line x1="30" y1="62" x2="200" y2="70" stroke="#3B5BDB" stroke-width="10" stroke-linecap="round" opacity="0.18"/>
  </g>

  <!-- "W" letter on left page -->
  <text x="322" y="510"
        font-family="Georgia, serif"
        font-size="160"
        font-weight="bold"
        fill="#3B5BDB"
        opacity="0.7"
        text-anchor="middle">W</text>

  <!-- Small star/sparkle on right page -->
  <g transform="translate(660, 390)">
    <polygon points="0,-38 9,-12 36,-12 15,5 23,31 0,15 -23,31 -15,5 -36,-12 -9,-12"
             fill="#F59F00" opacity="0.9"/>
  </g>
</svg>
`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('assets/icon.png');

await sharp(Buffer.from(svg))
  .resize(1024, 1024)
  .png()
  .toFile('assets/adaptive-icon.png');

console.log('Icon generated successfully!');
