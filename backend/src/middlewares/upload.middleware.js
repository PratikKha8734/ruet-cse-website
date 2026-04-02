import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = 'src/uploads/documents';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`),
});

const fileFilter = (_, file, cb) => {
  const allowed = /pdf|png|jpg|jpeg|webp/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext || mime) return cb(null, true);
  cb(new Error('Only pdf and image files are allowed'));
};

export const upload = multer({ storage, fileFilter });
