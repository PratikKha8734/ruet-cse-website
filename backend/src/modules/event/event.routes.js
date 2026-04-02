import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { eventController } from './event.controller.js';

const router = Router();
router.get('/', eventController.getAll);
router.get('/:id', eventController.getById);
router.post('/', requireAuth, upload.single('file'), eventController.create);
router.patch('/:id', requireAuth, upload.single('file'), eventController.update);
router.delete('/:id', requireAuth, eventController.remove);
export default router;
