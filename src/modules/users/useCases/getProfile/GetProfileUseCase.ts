import { Profile } from '.prisma/client';

import { AppError } from '../../../../shared/logic/AppError';
import { IUseCase } from '../../../../shared/modules/IUseCase';
import { IGetProfileByUserIdDTO } from '../../dtos/IGetProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class GetProfileUseCase implements IUseCase<IGetProfileByUserIdDTO, Profile> {
  private usersRepository: IUsersRepository;

  private profilesRepository: IProfilesRepository;

  constructor(
    usersRepository: IUsersRepository,
    profilesRepository: IProfilesRepository
  ) {
    this.profilesRepository = profilesRepository;
    this.usersRepository = usersRepository;
  }

  public async execute({ userId }: IGetProfileByUserIdDTO): Promise<Profile> {
    const user = await this.usersRepository.findById({ id: userId });

    if (!user) {
      throw new AppError(`User #${userId} not found`);
    }

    const profile = await this.profilesRepository.findByUserId({ userId });

    if (!profile) {
      throw new AppError(`Profile not found for User #${userId}`);
    }

    return profile;
  }
}

export { GetProfileUseCase };
