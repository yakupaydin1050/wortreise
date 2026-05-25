const pdf = require('pdf-parse');
const fs = require('fs');

const buf = fs.readFileSync('C:/yakup_backup_23102025_1250/About_Me/mobile app/Almanca mobile app/A2 kelime listesi.pdf');
pdf(buf).then(data => {
  fs.writeFileSync('C:/Users/YakupAydin/Desktop/lernspiel/a2_raw.txt', data.text, 'utf8');
  console.log('Done. Lines:', data.text.split('\n').length);
}).catch(e => {
  fs.writeFileSync('C:/Users/YakupAydin/Desktop/lernspiel/a2_err.txt', e.message, 'utf8');
  process.exit(1);
});
