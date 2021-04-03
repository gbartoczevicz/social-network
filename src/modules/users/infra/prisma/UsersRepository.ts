import { User } from '.prisma/client';

import { client } from '../../../../shared/infra/prisma';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IGetUserByEmailDTO, IGetUserByIdDTO } from '../../dtos/IGetUserDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await client.user.create({
      data,
    });

    return user;
  }

  public async save(data: IUpdateUserDTO): Promise<User> {
    const user = await client.user.update({
      where: {
        id: data.id,
      },
      data,
    });

    return user;
  }

  public async findByEmail({
    email,
  }: IGetUserByEmailDTO): Promise<User | null> {
    const toFindByEmail = await client.user.findUnique({
      where: {
        email,
      },
    });

    return toFindByEmail;
  }

  public async findById({ id }: IGetUserByIdDTO): Promise<User | null> {
    const toFindById = await client.user.findUnique({
      where: {
        id,
      },
    });

    return toFindById;
  }
}

export { UsersRepository };
