import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { routineController } from './routine.controller.js';

const router = Router();
router.get('/', routineController.getAll);
router.get('/:id', routineController.getById);
router.post('/', requireAuth, upload.single('file'), routineController.create);
router.patch('/:id', requireAuth, upload.single('file'), routineController.update);
router.delete('/:id', requireAuth, routineController.remove);
export default router;
