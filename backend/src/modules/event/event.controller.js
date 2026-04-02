import { createCrudController } from '../../utils/crudFactory.js';
import { Event } from './event.model.js';

export const eventController = createCrudController(Event, { eventDate: -1, createdAt: -1 });
