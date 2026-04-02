import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { calendarController } from './calendar.controller.js';

const router = Router();
router.get('/', calendarController.getAll);
router.get('/:id', calendarController.getById);
router.post('/', requireAuth, upload.single('file'), calendarController.create);
router.patch('/:id', requireAuth, upload.single('file'), calendarController.update);
router.delete('/:id', requireAuth, calendarController.remove);
export default router;
