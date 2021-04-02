import { Profile } from '.prisma/client';

import { ICreateProfileDTO } from '../dtos/ICreateProfileDTO';

export interface IProfilesRepository {
  create(profile: ICreateProfileDTO): Promise<Profile>;
  findByUserId(userId: number): Promise<Profile | null>;
}
