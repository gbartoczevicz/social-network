import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepository = new UsersRepository();

const createUserUserCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUserCase);

export { createUserController };
