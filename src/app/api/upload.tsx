import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle image upload (for example, saving it to the filesystem)
    const imagePath = path.join(process.cwd(), 'public', 'uploads', 'image.jpg');
    const buffer = req.body;
    fs.writeFileSync(imagePath, buffer);
    res.status(200).json({ message: "Image uploaded successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
