import { User } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class UpdateUserUseCase implements IUseCase<IUpdateUserDTO, User> {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute(userData: IUpdateUserDTO): Promise<User> {
    const { id, email } = userData;

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail && userWithSameEmail.id !== id) {
      throw new AppError(`Email ${email} already in use`);
    }

    let userToUpdate = await this.usersRepository.findById(id);

    if (!userToUpdate) {
      throw new AppError(`User ${id} not found`);
    }

    userToUpdate = await this.usersRepository.save(userData);

    return userToUpdate;
  }
}

export { UpdateUserUseCase };
