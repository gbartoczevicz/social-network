import { Post } from '.prisma/client';

import { client } from '../../../../shared/infra/prisma';
import { ICreatePostDTO } from '../../dtos/ICreatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class PostsRepository implements IPostsRepository {
  public async create({
    title,
    content,
    published,
    authorId,
  }: ICreatePostDTO): Promise<Post> {
    const post = await client.post.create({
      data: {
        title,
        content,
        published,
        authorId,
      },
    });

    return post;
  }
}

export { PostsRepository };
