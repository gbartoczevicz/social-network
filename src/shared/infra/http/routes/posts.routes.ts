import { Router } from 'express';

import { createPostController } from '../../../../modules/posts/useCases/createPost';

const routes = Router();

routes.post('/', (request, response) =>
  createPostController.execute(request, response)
);

export { routes as PostsRoutes };
