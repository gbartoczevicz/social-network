import { Profile } from '.prisma/client';

import { ICreateProfileDTO } from '../dtos/ICreateProfileDTO';
import { IGetProfileByUserIdDTO } from '../dtos/IGetProfileDTO';
import { IUpdateProfileDTO } from '../dtos/IUpdateProfileDTO';

export interface IProfilesRepository {
  create(data: ICreateProfileDTO): Promise<Profile>;
  save(data: IUpdateProfileDTO): Promise<Profile>;
  findByUserId(data: IGetProfileByUserIdDTO): Promise<Profile | null>;
}
