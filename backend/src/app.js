import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { env } from './config/env.js';
import { errorHandler } from './middlewares/error.middleware.js';
import noticeRoutes from './modules/notice/notice.routes.js';
import eventRoutes from './modules/event/event.routes.js';
import programRoutes from './modules/program/program.routes.js';
import curriculumRoutes from './modules/curriculum/curriculum.routes.js';
import syllabusRoutes from './modules/syllabus/syllabus.routes.js';
import calendarRoutes from './modules/calendar/calendar.routes.js';
import routineRoutes from './modules/routine/routine.routes.js';
import authRoutes from './modules/auth/auth.routes.js';

const app = express();
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static('src/uploads'));

app.get('/', (req, res) => res.json({ success: true, message: 'RUET Academic Portal API running' }));
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/curriculums', curriculumRoutes);
app.use('/api/syllabi', syllabusRoutes);
app.use('/api/calendars', calendarRoutes);
app.use('/api/routines', routineRoutes);
app.use(errorHandler);

export default app;
