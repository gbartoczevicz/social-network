import { Router } from 'express';

import { PostsRoutes } from './posts.routes';
import { ProfilesRoutes } from './profiles.routes';
import { UsersRoutes } from './users.routes';

const routes = Router();

routes.use('/users', UsersRoutes);
routes.use('/profiles', ProfilesRoutes);
routes.use('/posts', PostsRoutes);

export { routes };
