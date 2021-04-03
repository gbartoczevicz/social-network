import { Router } from 'express';

import { createPostController } from '../../../../modules/posts/useCases/createPost';
import { getPostsFromUserController } from '../../../../modules/posts/useCases/getPostsFromUser';
import { checkUserIdInHeaders } from '../../../../modules/users/infra/http/middlewares/checkUserIdInHeaders';

const routes = Router();

routes.use(checkUserIdInHeaders);

routes.post('/', (request, response) =>
  createPostController.execute(request, response)
);

routes.get('/', (request, response) =>
  getPostsFromUserController.execute(request, response)
);

export { routes as PostsRoutes };
