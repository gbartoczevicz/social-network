import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  private useCase: UpdateUserUseCase;

  constructor(useCase: UpdateUserUseCase) {
    this.useCase = useCase;
  }

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.user;

    const toUpdateUser: IUpdateUserDTO = {
      ...request.body,
      id,
    };

    try {
      const user = await this.useCase.execute(toUpdateUser);

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

export { UpdateUserController };
