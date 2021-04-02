import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { ICreateProfileDTO } from '../../dtos/ICreateProfileDTO';
import { CreateProfileUseCase } from './CreateProfileUseCase';

class CreateProfileController {
  private useCase: CreateProfileUseCase;

  constructor(useCase: CreateProfileUseCase) {
    this.useCase = useCase;
  }

  public async execute(request: Request, response: Response): Promise<unknown> {
    const toCreateProfile = request.body as ICreateProfileDTO;

    console.log({ toCreateProfile });

    try {
      const profile = await this.useCase.execute(toCreateProfile);

      return response.json(profile);
    } catch (err) {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
      }

      console.log(err);

      return response.status(500).json({ message: 'Something went wrong' });
    }
  }
}

export { CreateProfileController };
