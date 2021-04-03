import { Profile } from '.prisma/client';

import { client } from '../../../../shared/infra/prisma';
import { ICreateProfileDTO } from '../../dtos/ICreateProfileDTO';
import { IUpdateProfileDTO } from '../../dtos/IUpdateProfileDTO';
import { IProfilesRepository } from '../../repositories/IProfilesRepository';

class ProfilesRepository implements IProfilesRepository {
  public async create({
    bio,
    birthday,
    userId,
  }: ICreateProfileDTO): Promise<Profile> {
    const profile = await client.profile.create({
      data: {
        bio,
        birthday,
        userId,
      },
    });

    return profile;
  }

  public async save(data: IUpdateProfileDTO): Promise<Profile> {
    const profile = await client.profile.update({
      where: { userId: data.userId },
      data,
    });

    return profile;
  }

  public async findByUserId(userId: number): Promise<Profile | null> {
    const toFindByUserId = await client.profile.findUnique({
      where: { userId },
    });

    return toFindByUserId;
  }
}

export { ProfilesRepository };
