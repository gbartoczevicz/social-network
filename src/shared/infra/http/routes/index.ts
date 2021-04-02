import { Router } from 'express';

import { ProfilesRoutes } from './profiles.routes';
import { UsersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', UsersRoutes);
routes.use('/profiles', ProfilesRoutes);

export { routes };
