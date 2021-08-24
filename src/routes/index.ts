import { Router } from 'express';

import usersRouter from './users.route';
import hobbiesRouter from './hobbies.route';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/hobbies', hobbiesRouter);

export default routes;