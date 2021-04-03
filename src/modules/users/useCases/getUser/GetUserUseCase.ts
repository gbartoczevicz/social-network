import { User } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IGetUserByIdDTO } from '../../dtos/IGetUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetUserUseCase implements IUseCase<IGetUserByIdDTO, User> {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ id }: IGetUserByIdDTO): Promise<User> {
    const user = await this.usersRepository.findById({ id });

    if (!user) {
      throw new AppError(`User #${id} not found`);
    }

    return user;
  }
}

export { GetUserUseCase };
