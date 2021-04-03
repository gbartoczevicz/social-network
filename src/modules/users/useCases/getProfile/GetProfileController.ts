import { Request, Response } from 'express';

import { AppError } from '../../../../shared/logic/AppError';
import { IGetProfileByUserIdDTO } from '../../dtos/IGetProfileDTO';
import { GetProfileUseCase } from './GetProfileUseCase';

class GetProfileController {
  private useCase: GetProfileUseCase;

  constructor(useCase: GetProfileUseCase) {
    this.useCase = useCase;
  }

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id: userId } = request.user;

    const toFindProfile: IGetProfileByUserIdDTO = {
      userId,
    };

    try {
      const user = await this.useCase.execute(toFindProfile);

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

export { GetProfileController };
