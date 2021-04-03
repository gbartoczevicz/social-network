import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IUpdatePostDTO } from '../../dtos/IUpdatePostDTO';
import { UpdatePostUseCase } from './UpdatePostUseCase';

class UpdatePostController {
  private useCase: UpdatePostUseCase;

  constructor(useCase: UpdatePostUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const { id } = request.user;
    const { post_id } = request.params;

    const toUpdatePost: IUpdatePostDTO = {
      ...request.body,
      authorId: id,
      id: Number(post_id),
    };

    try {
      const post = await this.useCase.execute(toUpdatePost);

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

export { UpdatePostController };
