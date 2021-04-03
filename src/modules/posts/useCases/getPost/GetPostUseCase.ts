import { Post } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IFindPostByIdDTO } from '../../dtos/IFindPostByIdDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class GetPostUseCase implements IUseCase<IFindPostByIdDTO, Post> {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  public async execute({ id }: IFindPostByIdDTO): Promise<Post> {
    const post = await this.postsRepository.findById({ id });

    if (!post) {
      throw new AppError(`Post #${id} not found`);
    }

    return post;
  }
}

export { GetPostUseCase };
