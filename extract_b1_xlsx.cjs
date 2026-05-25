const XLSX = require('xlsx');
const fs = require('fs');

try {
  const wb = XLSX.readFile('C:/yakup_backup_23102025_1250/About_Me/mobile app/Almanca mobile app/b1 goethe.xlsx');
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
  fs.writeFileSync('C:/Users/YakupAydin/Desktop/lernspiel/b1_xlsx.txt', data.map(row => row.join('\t')).join('\n'), 'utf8');
  console.log('Done. Rows:', data.length, 'Sheets:', wb.SheetNames);
} catch(e) {
  console.error('Error:', e.message);
}
