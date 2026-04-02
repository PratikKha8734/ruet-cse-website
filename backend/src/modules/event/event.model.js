import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, default: 'Event' },
  eventDate: { type: Date },
  link: { type: String, default: '' },
  fileUrl: { type: String, default: '' },
}, { timestamps: true });

export const Event = mongoose.model('Event', schema);
