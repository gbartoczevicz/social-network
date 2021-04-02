import { Router } from 'express';

import { createProfileController } from '../../../../modules/users/useCases/createProfile';

const routes = Router();

routes.post('/', (request, response) =>
  createProfileController.execute(request, response)
);

export { routes as ProfilesRoutes };
