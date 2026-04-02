import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { env } from '../config/env.js';
import { Notice } from '../modules/notice/notice.model.js';
import { Event } from '../modules/event/event.model.js';
import { Program } from '../modules/program/program.model.js';
import { Curriculum } from '../modules/curriculum/curriculum.model.js';
import { Syllabus } from '../modules/syllabus/syllabus.model.js';
import { Calendar } from '../modules/calendar/calendar.model.js';
import { Routine } from '../modules/routine/routine.model.js';
import { Admin } from '../modules/auth/auth.model.js';

await mongoose.connect(env.mongoUri);

await Promise.all([
  Notice.deleteMany({}), Event.deleteMany({}), Program.deleteMany({}), Curriculum.deleteMany({}),
  Syllabus.deleteMany({}), Calendar.deleteMany({}), Routine.deleteMany({})
]);

const password = await bcrypt.hash('admin123', 10);
await Admin.findOneAndUpdate(
  { email: 'admin@ruet.ac.bd' },
  { name: 'Portal Admin', email: 'admin@ruet.ac.bd', password, role: 'admin' },
  { upsert: true, new: true, setDefaultsOnInsert: true }
);

await Notice.insertMany([
  { title: 'Semester Registration Notice', description: 'Registration schedule for Level-2 Term-II students.', category: 'Academic Notice', semester: 'L2 T2' },
  { title: 'Updated Office Timing', description: 'Department office timing updated for Ramadan session.', category: 'Office Notice' }
]);

await Event.insertMany([
  { title: 'AI & Robotics Seminar', description: 'Department seminar on modern AI tools in robotics.', category: 'Seminar', eventDate: new Date() },
  { title: 'Programming Contest', description: 'Inter-year programming contest announcement.', category: 'Contest', eventDate: new Date() }
]);

await Program.insertMany([
  { title: 'BSc in Mechanical Engineering', description: 'Four-year undergraduate degree with design, manufacturing, thermofluids and control courses.', category: 'Undergraduate' },
  { title: 'MSc in Mechanical Engineering', description: 'Advanced postgraduate program with thesis and research track.', category: 'Postgraduate' }
]);

await Curriculum.insertMany([
  { title: 'Level 1 Term 1 Curriculum', description: 'Core mathematics, physics, engineering drawing and introductory computing.', semester: 'L1 T1' },
  { title: 'Level 2 Term 1 Curriculum', description: 'Mechanics, materials, thermodynamics and lab courses.', semester: 'L2 T1' }
]);

await Syllabus.insertMany([
  { title: 'Engineering Mechanics Syllabus', description: 'Detailed course outline, outcomes and assessment.', semester: 'L1 T2' },
  { title: 'Thermodynamics Syllabus', description: 'Topics, references and weekly plan.', semester: 'L2 T1' }
]);

await Calendar.insertMany([
  { title: 'Academic Calendar 2026', description: 'Semester start, recess, examinations and result publication timeline.' }
]);

await Routine.insertMany([
  { title: 'Class Routine - Level 1 Term 1', description: 'Weekly class schedule for first year first term.', type: 'class', semester: 'L1 T1', session: '2025-26' },
  { title: 'Midterm Exam Routine', description: 'Department midterm examination schedule.', type: 'exam', semester: 'L2 T1', session: '2025-26' },
  { title: 'CT Routine - Section A', description: 'Continuous assessment schedule for Section A.', type: 'ct', semester: 'L1 T1', session: '2025-26' }
]);

console.log('Seed completed');
console.log('Admin login: admin@ruet.ac.bd / admin123');
await mongoose.disconnect();
