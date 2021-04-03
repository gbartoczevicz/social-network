import { Post } from '.prisma/client';

import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '../dtos/IUpdatePostDTO';

export interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  save(data: IUpdatePostDTO): Promise<Post>;
  findById(id: number): Promise<Post | null>;
  findAllByAuthorId(authorId: number): Promise<Post[]>;
}
