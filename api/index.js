import fs from 'fs';
import path from 'path';
import { guestList } from '../src/data/guestList.js';

export default function handler(req, res) {
  // Read the 'to' or 'name' query parameter
  let name = req.query.to || req.query.name;
  
  // Ánh xạ ID rút gọn sang tên thật nếu có
  if (name && guestList[name]) {
    name = guestList[name];
  }
  
  // Path to the built index.html
  const filePath = path.resolve(process.cwd(), 'dist', 'index.html');
  
  try {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // If a name is provided, replace the og:image and twitter:image meta tags
    if (name) {
      // We only change the title, keep the static image for preview
      html = html.replace(
        /<meta property="og:title" content="[^"]*" \/>/g,
        `<meta property="og:title" content="Thư mời gửi: ${name}" />`
      );


    }
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    console.error('Error reading index.html', err);
    res.status(500).send('Internal Server Error');
  }
}
