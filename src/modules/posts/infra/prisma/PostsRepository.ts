import { Post } from '.prisma/client';

import { client } from '../../../../shared/infra/prisma';
import { ICreatePostDTO } from '../../dtos/ICreatePostDTO';
import { IUpdatePostDTO } from '../../dtos/IUpdatePostDTO';
import { IPostsRepository } from '../../repositories/IPostsRepository';

class PostsRepository implements IPostsRepository {
  public async create(data: ICreatePostDTO): Promise<Post> {
    const post = await client.post.create({ data });

    return post;
  }

  public async save(data: IUpdatePostDTO): Promise<Post> {
    const post = await client.post.update({
      where: {
        id: data.id,
      },
      data,
    });

    return post;
  }

  public async findById(id: number): Promise<Post | null> {
    const toFindPost = await client.post.findUnique({
      where: { id },
    });

    return toFindPost;
  }

  public async findAllByAuthorId(authorId: number): Promise<Post[]> {
    const posts = await client.post.findMany({
      where: { authorId },
    });

    return posts;
  }
}

export { PostsRepository };
