import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { curriculumController } from './curriculum.controller.js';

const router = Router();
router.get('/', curriculumController.getAll);
router.get('/:id', curriculumController.getById);
router.post('/', requireAuth, upload.single('file'), curriculumController.create);
router.patch('/:id', requireAuth, upload.single('file'), curriculumController.update);
router.delete('/:id', requireAuth, curriculumController.remove);
export default router;
