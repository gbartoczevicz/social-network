import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const usersRepository = new UsersRepository();

const getUserUseCase = new GetUserUseCase(usersRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserController };
