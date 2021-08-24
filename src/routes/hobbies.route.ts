import { Router } from 'express';

import HobbiesController from '../controllers/HobbiesController';

const hobbiesRouter = Router();

hobbiesRouter.post('/', HobbiesController.create);
hobbiesRouter.put('/:id', HobbiesController.update);
hobbiesRouter.get('/:id', HobbiesController.show);
hobbiesRouter.delete('/:id', HobbiesController.delete);

export default hobbiesRouter;