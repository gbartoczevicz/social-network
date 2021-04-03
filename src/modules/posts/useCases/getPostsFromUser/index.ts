import { UsersRepository } from '../../../users/infra/prisma/UsersRepository';
import { PostsRepository } from '../../infra/prisma/PostsRepository';
import { GetPostsFromUserController } from './GetPostsFromUserController';
import { GetPostsFromUserUseCase } from './GetPostsFromUserUseCase';

const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository();

const getPostsFromUser = new GetPostsFromUserUseCase(
  postsRepository,
  usersRepository
);
const getPostsFromUserController = new GetPostsFromUserController(
  getPostsFromUser
);

export { getPostsFromUserController };
