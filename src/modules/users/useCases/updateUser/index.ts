import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const usersRepository = new UsersRepository();

const updateUserUseCase = new UpdateUserUseCase(usersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
