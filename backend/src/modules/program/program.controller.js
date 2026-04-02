import { createCrudController } from '../../utils/crudFactory.js';
import { Program } from './program.model.js';

export const programController = createCrudController(Program);
