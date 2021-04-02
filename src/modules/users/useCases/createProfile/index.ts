import { ProfilesRepository } from '../../infra/prisma/ProfilesRepository';
import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { CreateProfileController } from './CreateProfileController';
import { CreateProfileUseCase } from './CreateProfileUseCase';

const profilesRepository = new ProfilesRepository();
const usersRepository = new UsersRepository();

const createProfileUseCase = new CreateProfileUseCase(
  profilesRepository,
  usersRepository
);

const createProfileController = new CreateProfileController(
  createProfileUseCase
);

export { createProfileController };
