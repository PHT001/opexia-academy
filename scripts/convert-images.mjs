import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, '..', 'public', 'images');

// Find all PNG/JPG/JPEG files over 500KB
const files = fs.readdirSync(imgDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return false;
  const stat = fs.statSync(path.join(imgDir, f));
  return stat.size > 500 * 1024;
});

console.log('Files to convert (' + files.length + '):', files);

for (const f of files) {
  const input = path.join(imgDir, f);
  const output = path.join(imgDir, f.replace(/\.(png|jpe?g)$/i, '.webp'));
  try {
    const info = await sharp(input).webp({ quality: 80 }).toFile(output);
    const origSize = fs.statSync(input).size;
    console.log(
      f + ' -> ' + path.basename(output) +
      ' | ' + (origSize / 1024).toFixed(0) + 'KB -> ' + (info.size / 1024).toFixed(0) + 'KB'
    );
  } catch (err) {
    console.error('Error converting ' + f + ': ' + err.message);
  }
}

console.log('Done!');
