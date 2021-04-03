import { Profile } from '.prisma/client';

import { ICreateProfileDTO } from '../dtos/ICreateProfileDTO';
import { IUpdateProfileDTO } from '../dtos/IUpdateProfileDTO';

export interface IProfilesRepository {
  create(profile: ICreateProfileDTO): Promise<Profile>;
  save(profile: IUpdateProfileDTO): Promise<Profile>;
  findByUserId(userId: number): Promise<Profile | null>;
}
