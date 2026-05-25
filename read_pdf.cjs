const pdf = require('pdf-parse');
const fs = require('fs');

const buf = fs.readFileSync('C:/yakup_backup_23102025_1250/About_Me/mobile app/Almanca mobile app/A2 kelime listesi.pdf');
pdf(buf).then(data => {
  const lines = data.text.split('\n').filter(l => l.trim());
  console.log('Toplam satır:', lines.length);
  lines.forEach((l, i) => console.log(i + ':', JSON.stringify(l)));
}).catch(e => console.error('HATA:', e.message));
