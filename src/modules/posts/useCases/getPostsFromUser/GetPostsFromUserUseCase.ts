import { Post } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { IFindPostsByAuthorIdDTO } from '../../dtos/IFindPostsByAuthorIdDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class GetPostsFromUserUseCase
  implements IUseCase<IFindPostsByAuthorIdDTO, Promise<Post[]>> {
  private postsRepository: IPostsRepository;

  private usersRepository: IUsersRepository;

  constructor(
    postsRepository: IPostsRepository,
    usersRepository: IUsersRepository
  ) {
    this.postsRepository = postsRepository;
    this.usersRepository = usersRepository;
  }

  public async execute({ authorId }: IFindPostsByAuthorIdDTO): Promise<Post[]> {
    const doesAuthorExists = await this.usersRepository.findById({
      id: authorId,
    });

    if (!doesAuthorExists) {
      throw new AppError(`Author ${authorId} does not exists`);
    }

    const posts = await this.postsRepository.findAllByAuthorId(authorId);

    return posts;
  }
}

export { GetPostsFromUserUseCase };
