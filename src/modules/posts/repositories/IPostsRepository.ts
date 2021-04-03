import { Post } from '.prisma/client';

import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { IFindPostByIdDTO } from '../dtos/IFindPostByIdDTO';
import { IFindPostsByAuthorIdDTO } from '../dtos/IFindPostsByAuthorIdDTO';
import { IUpdatePostDTO } from '../dtos/IUpdatePostDTO';

export interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  save(data: IUpdatePostDTO): Promise<Post>;
  findById(data: IFindPostByIdDTO): Promise<Post | null>;
  findAllByAuthorId(data: IFindPostsByAuthorIdDTO): Promise<Post[]>;
}
