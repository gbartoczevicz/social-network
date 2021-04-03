import { Router } from 'express';

import { checkUserIdInHeaders } from '../../../../modules/users/infra/http/middlewares/checkUserIdInHeaders';
import { createProfileController } from '../../../../modules/users/useCases/createProfile';

const routes = Router();

routes.post('/', checkUserIdInHeaders, (request, response) =>
  createProfileController.execute(request, response)
);

export { routes as ProfilesRoutes };
