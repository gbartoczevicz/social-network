import { UsersRepository } from '../../../users/infra/prisma/UsersRepository';
import { PostsRepository } from '../../infra/prisma/PostsRepository';
import { UpdatePostController } from './UpdatePostController';
import { UpdatePostUseCase } from './UpdatePostUseCase';

const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository();

const updatePostUseCase = new UpdatePostUseCase(
  postsRepository,
  usersRepository
);

const updatePostController = new UpdatePostController(updatePostUseCase);

export { updatePostController };
