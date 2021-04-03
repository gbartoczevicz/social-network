import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IFindPostsByAuthorIdDTO } from '../../dtos/IFindPostsByAuthorIdDTO';
import { GetPostsFromUserUseCase } from './GetPostsFromUserUseCase';

class GetPostsFromUserController {
  private useCase: GetPostsFromUserUseCase;

  constructor(useCase: GetPostsFromUserUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const { id } = request.user;

    const toFindPostsByAuthorId: IFindPostsByAuthorIdDTO = {
      authorId: Number(id),
    };

    try {
      const posts = await this.useCase.execute(toFindPostsByAuthorId);

      return response.json(posts);
    } catch (err) {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
      }

      console.log(err);

      return response.status(500).json({ message: 'Something went wrong' });
    }
  }
}

export { GetPostsFromUserController };
