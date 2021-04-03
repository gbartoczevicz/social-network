import { Post } from '.prisma/client';

import { ICreatePostDTO } from '../dtos/ICreatePostDTO';

export interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  findAllByAuthorId(authorId: number): Promise<Post[]>;
}
