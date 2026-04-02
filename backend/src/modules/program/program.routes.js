import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { programController } from './program.controller.js';

const router = Router();
router.get('/', programController.getAll);
router.get('/:id', programController.getById);
router.post('/', requireAuth, upload.single('file'), programController.create);
router.patch('/:id', requireAuth, upload.single('file'), programController.update);
router.delete('/:id', requireAuth, programController.remove);
export default router;
