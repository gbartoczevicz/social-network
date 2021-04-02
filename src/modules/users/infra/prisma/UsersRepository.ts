import { User } from '.prisma/client';

import { client } from '../../../../shared/infra/prisma';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  public async save({ name, email }: ICreateUserDTO): Promise<User> {
    const user = await client.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const toFindByEmail = await client.user.findUnique({
      where: {
        email,
      },
    });

    return toFindByEmail;
  }
}

export { UsersRepository };
