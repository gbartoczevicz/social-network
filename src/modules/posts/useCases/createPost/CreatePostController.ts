import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { ICreatePostDTO } from '../../dtos/ICreatePostDTO';
import { CreatePostUseCase } from './CreatePostUseCase';

class CreatePostController {
  private useCase: CreatePostUseCase;

  constructor(useCase: CreatePostUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const toCreatePost = request.body as ICreatePostDTO;

    try {
      const post = await this.useCase.execute(toCreatePost);

      return response.json(post);
    } catch (err) {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
      }

      console.log(err);

      return response.status(500).json({ message: 'Something went wrong' });
    }
  }
}

export { CreatePostController };
