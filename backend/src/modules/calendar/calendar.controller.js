import { createCrudController } from '../../utils/crudFactory.js';
import { Calendar } from './calendar.model.js';

export const calendarController = createCrudController(Calendar);
