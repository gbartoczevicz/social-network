import { User } from '@prisma/client';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IGetUserByEmailDTO, IGetUserByIdDTO } from '../dtos/IGetUserDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  save(data: IUpdateUserDTO): Promise<User>;
  findByEmail(data: IGetUserByEmailDTO): Promise<User | null>;
  findById(data: IGetUserByIdDTO): Promise<User | null>;
}
