import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IUpdateProfileDTO } from '../../dtos/IUpdateProfileDTO';
import { UpdateProfileUseCase } from './UpdateProfileUseCase';

class UpdateProfileController {
  private useCase: UpdateProfileUseCase;

  constructor(useCase: UpdateProfileUseCase) {
    this.useCase = useCase;
  }

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.user;
    const { birthday } = request.body;

    let formattedDate: Date | undefined;

    if (birthday) {
      formattedDate = new Date(`${String(birthday)} 00:00`);
    }

    const toUpdateProfile: IUpdateProfileDTO = {
      ...request.body,
      birthday: formattedDate,
      userId: id,
    };

    try {
      const profile = await this.useCase.execute(toUpdateProfile);

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

export { UpdateProfileController };
