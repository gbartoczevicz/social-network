import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const toCreateUser = request.body as ICreateUserDTO;

    try {
      const user = await this.useCase.execute(toCreateUser);

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

export { CreateUserController };
