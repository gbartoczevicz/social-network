import { User } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateUserUseCase implements IUseCase<ICreateUserDTO, Promise<User>> {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, email }: ICreateUserDTO): Promise<User> {
    const doesUserExists = await this.usersRepository.findByEmail({ email });

    if (doesUserExists) {
      throw new AppError(`Email ${email} already in use`, 402);
    }

    const user = await this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
