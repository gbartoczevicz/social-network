import { UsersRepository } from '../../../users/infra/prisma/UsersRepository';
import { PostsRepository } from '../../infra/prisma/PostsRepository';
import { CreatePostController } from './CreatePostController';
import { CreatePostUseCase } from './CreatePostUseCase';

const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository();

const createPostUserCase = new CreatePostUseCase(
  postsRepository,
  usersRepository
);
const createPostController = new CreatePostController(createPostUserCase);

export { createPostController };
