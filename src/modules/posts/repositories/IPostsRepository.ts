import { Post } from '.prisma/client';

import { ICreatePostDTO } from '../dtos/ICreatePostDTO';

export interface IPostsRepository {
  create(post: ICreatePostDTO): Promise<Post>;
}
