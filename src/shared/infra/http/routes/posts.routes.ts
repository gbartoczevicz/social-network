import { Router } from 'express';

import { checkUserIdInHeaders } from '../../../../modules/posts/infra/http/middlewares/checkUserIdInHeaders';
import { createPostController } from '../../../../modules/posts/useCases/createPost';
import { getPostsFromUserController } from '../../../../modules/posts/useCases/getPostsFromUser';

const routes = Router();

routes.post('/', checkUserIdInHeaders, (request, response) =>
  createPostController.execute(request, response)
);

routes.get('/', checkUserIdInHeaders, (request, response) =>
  getPostsFromUserController.execute(request, response)
);

export { routes as PostsRoutes };
