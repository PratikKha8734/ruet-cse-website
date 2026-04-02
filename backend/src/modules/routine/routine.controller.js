import { createCrudController } from '../../utils/crudFactory.js';
import { Routine } from './routine.model.js';

export const routineController = createCrudController(Routine, { publishedAt: -1, createdAt: -1 }, (req) => req.query.type ? { type: req.query.type } : {});
