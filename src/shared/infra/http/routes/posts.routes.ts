import { Router } from 'express';

import { createPostController } from '../../../../modules/posts/useCases/createPost';
import { getPostsFromUserController } from '../../../../modules/posts/useCases/getPostsFromUser';
import { updatePostController } from '../../../../modules/posts/useCases/updatePost';
import { checkUserIdInHeaders } from '../../../../modules/users/infra/http/middlewares/checkUserIdInHeaders';

const routes = Router();

routes.use(checkUserIdInHeaders);

routes.get('/', (request, response) =>
  getPostsFromUserController.execute(request, response)
);

routes.post('/', (request, response) =>
  createPostController.execute(request, response)
);

routes.put('/:post_id', (request, response) =>
  updatePostController.execute(request, response)
);

export { routes as PostsRoutes };
