import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IFindPostByIdDTO } from '../../dtos/IFindPostByIdDTO';
import { GetPostUseCase } from './GetPostUseCase';

class GetPostController {
  private useCase: GetPostUseCase;

  constructor(useCase: GetPostUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const { post_id: id } = request.params;

    const toFindPostById: IFindPostByIdDTO = {
      id: Number(id),
    };

    try {
      const post = await this.useCase.execute(toFindPostById);

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

export { GetPostController };
