import { Post } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IUsersRepository } from '../../../users/repositories/IUsersRepository';
import { IUpdatePostDTO } from '../../dtos/IUpdatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class UpdatePostUseCase implements IUseCase<IUpdatePostDTO, Promise<Post>> {
  private postsRepository: IPostsRepository;

  private usersRepository: IUsersRepository;

  constructor(
    postsRepository: IPostsRepository,
    usersRepository: IUsersRepository
  ) {
    this.postsRepository = postsRepository;
    this.usersRepository = usersRepository;
  }

  public async execute(postData: IUpdatePostDTO): Promise<Post> {
    const { authorId } = postData;

    const doesAuthorExists = await this.usersRepository.findById(authorId);

    if (!doesAuthorExists) {
      throw new AppError(`Author ${authorId} does not exists`);
    }

    const { id } = postData;

    let toUpdatePost = await this.postsRepository.findById(id);

    if (!toUpdatePost) {
      throw new AppError(`Post ${id} does not exists`);
    }

    toUpdatePost = await this.postsRepository.save(postData);

    return toUpdatePost;
  }
}

export { UpdatePostUseCase };
