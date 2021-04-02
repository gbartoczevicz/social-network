import { Post } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { ICreatePostDTO } from '../../dtos/ICreatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class CreatePostUseCase implements IUseCase<ICreatePostDTO, Promise<Post>> {
  private postsRepository: IPostsRepository;

  private usersRepository: IUsersRepository;

  constructor(
    postsRepository: IPostsRepository,
    usersRepository: IUsersRepository
  ) {
    this.postsRepository = postsRepository;
    this.usersRepository = usersRepository;
  }

  public async execute(postData: ICreatePostDTO): Promise<Post> {
    const { authorId } = postData;

    const doesUserExists = await this.usersRepository.findById(authorId);

    if (!doesUserExists) {
      throw new AppError('User does not exists');
    }

    const post = await this.postsRepository.create(postData);

    return post;
  }
}

export { CreatePostUseCase };
