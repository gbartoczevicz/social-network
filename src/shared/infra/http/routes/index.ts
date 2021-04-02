import { Router } from 'express';

import { UsersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', UsersRoutes);

export { routes };
