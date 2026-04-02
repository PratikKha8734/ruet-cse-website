import { createCrudController } from '../../utils/crudFactory.js';
import { Syllabus } from './syllabus.model.js';

export const syllabusController = createCrudController(Syllabus);
