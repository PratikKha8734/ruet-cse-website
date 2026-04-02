import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware.js';
import { requireAuth } from '../../middlewares/auth.middleware.js';
import { noticeController } from './notice.controller.js';

const router = Router();
router.get('/', noticeController.getAll);
router.get('/:id', noticeController.getById);
router.post('/', requireAuth, upload.single('file'), noticeController.create);
router.patch('/:id', requireAuth, upload.single('file'), noticeController.update);
router.delete('/:id', requireAuth, noticeController.remove);
export default router;
