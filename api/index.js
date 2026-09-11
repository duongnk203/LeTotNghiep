import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Read the 'to' or 'name' query parameter
  const name = req.query.to || req.query.name;
  
  // Path to the built index.html
  const filePath = path.resolve(process.cwd(), 'dist', 'index.html');
  
  try {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // If a name is provided, replace the og:image and twitter:image meta tags
    if (name) {
      const host = req.headers.host;
      const protocol = host.includes('localhost') ? 'http' : 'https';
      const ogImageUrl = `${protocol}://${host}/api/og?name=${encodeURIComponent(name)}`;
      
      html = html.replace(
        /<meta property="og:image" content="[^"]*" \/>/g,
        `<meta property="og:image" content="${ogImageUrl}" />`
      );
      
      html = html.replace(
        /<meta property="twitter:image" content="[^"]*" \/>/g,
        `<meta property="twitter:image" content="${ogImageUrl}" />`
      );

      // Optionally, you can also change the og:title
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
