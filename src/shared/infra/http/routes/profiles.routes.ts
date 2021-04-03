import { Router } from 'express';

import { checkUserIdInHeaders } from '../../../../modules/users/infra/http/middlewares/checkUserIdInHeaders';
import { createProfileController } from '../../../../modules/users/useCases/createProfile';
import { getProfileController } from '../../../../modules/users/useCases/getProfile';
import { updateProfileController } from '../../../../modules/users/useCases/updateProfile';

const routes = Router();

routes.use(checkUserIdInHeaders);

routes.get('/', (request, response) =>
  getProfileController.execute(request, response)
);

routes.post('/', (request, response) =>
  createProfileController.execute(request, response)
);

routes.put('/', (request, response) =>
  updateProfileController.execute(request, response)
);

export { routes as ProfilesRoutes };
