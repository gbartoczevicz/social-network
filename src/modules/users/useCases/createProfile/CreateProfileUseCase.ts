import { Profile } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { ICreateProfileDTO } from '../../dtos/ICreateProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateProfileUseCase
  implements IUseCase<ICreateProfileDTO, Promise<Profile>> {
  private profilesRepository: IProfilesRepository;

  private usersRepository: IUsersRepository;

  constructor(
    profilesRepository: IProfilesRepository,
    usersRepository: IUsersRepository
  ) {
    this.profilesRepository = profilesRepository;
    this.usersRepository = usersRepository;
  }

  public async execute({ bio, userId }: ICreateProfileDTO): Promise<Profile> {
    const doesUserExists = await this.usersRepository.findById(userId);

    if (!doesUserExists) {
      throw new AppError(`User #${userId} not found`);
    }

    const doesUserAlreadyHasAProfile = await this.profilesRepository.findByUserId(
      userId
    );

    if (doesUserAlreadyHasAProfile) {
      throw new AppError(`User #${userId} already has a profile`);
    }

    const profile = await this.profilesRepository.create({
      bio,
      userId,
    });

    return profile;
  }
}

export { CreateProfileUseCase };
