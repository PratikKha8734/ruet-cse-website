import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  type: { type: String, enum: ['class', 'exam', 'ct'], required: true },
  category: { type: String, default: 'Routine' },
  semester: { type: String, default: '' },
  session: { type: String, default: '' },
  link: { type: String, default: '' },
  fileUrl: { type: String, default: '' },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Routine = mongoose.model('Routine', schema);
