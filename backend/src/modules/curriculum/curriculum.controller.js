import { createCrudController } from '../../utils/crudFactory.js';
import { Curriculum } from './curriculum.model.js';

export const curriculumController = createCrudController(Curriculum);
