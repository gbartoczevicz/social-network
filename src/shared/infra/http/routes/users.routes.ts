import { Router } from 'express';

import { checkUserIdInHeaders } from '../../../../modules/users/infra/http/middlewares/checkUserIdInHeaders';
import { createUserController } from '../../../../modules/users/useCases/createUser';
import { getUserController } from '../../../../modules/users/useCases/getUser';
import { updateUserController } from '../../../../modules/users/useCases/updateUser';

const routes = Router();

routes.post('/', (request, response) =>
  createUserController.execute(request, response)
);

routes.use(checkUserIdInHeaders);

routes.get('/', (request, response) =>
  getUserController.execute(request, response)
);

routes.put('/', (request, response) =>
  updateUserController.execute(request, response)
);

export { routes as UsersRoutes };
