import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'Curriculum' },
  semester: { type: String, default: '' },
  link: { type: String, default: '' },
  fileUrl: { type: String, default: '' },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Curriculum = mongoose.model('Curriculum', schema);
