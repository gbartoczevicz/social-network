import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IGetUserByIdDTO } from '../../dtos/IGetUserDTO';
import { GetUserUseCase } from './GetUserUseCase';

class GetUserController {
  private useCase: GetUserUseCase;

  constructor(useCase: GetUserUseCase) {
    this.useCase = useCase;
  }

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.user;

    const toFindUser: IGetUserByIdDTO = {
      id,
    };

    try {
      const user = await this.useCase.execute(toFindUser);

      return response.json(user);
    } catch (err) {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
      }

      console.log(err);

      return response.status(500).json({ message: 'Something went wrong' });
    }
  }
}

export { GetUserController };
