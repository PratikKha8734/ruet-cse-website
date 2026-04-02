import { createCrudController } from '../../utils/crudFactory.js';
import { Notice } from './notice.model.js';

export const noticeController = createCrudController(Notice);
