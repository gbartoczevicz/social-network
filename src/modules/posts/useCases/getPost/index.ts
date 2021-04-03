import { PostsRepository } from '../../infra/prisma/PostsRepository';
import { GetPostController } from './GetPostController';
import { GetPostUseCase } from './GetPostUseCase';

const postsRepository = new PostsRepository();

const getPostUseCase = new GetPostUseCase(postsRepository);

const getPostController = new GetPostController(getPostUseCase);

export { getPostController };
