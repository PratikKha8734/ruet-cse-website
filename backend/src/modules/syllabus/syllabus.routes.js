import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { syllabusController } from './syllabus.controller.js';

const router = Router();
router.get('/', syllabusController.getAll);
router.get('/:id', syllabusController.getById);
router.post('/', requireAuth, upload.single('file'), syllabusController.create);
router.patch('/:id', requireAuth, upload.single('file'), syllabusController.update);
router.delete('/:id', requireAuth, syllabusController.remove);
export default router;
