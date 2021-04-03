import { ProfilesRepository } from '../../infra/prisma/ProfilesRepository';
import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { GetProfileController } from './GetProfileController';
import { GetProfileUseCase } from './GetProfileUseCase';

const profilesRepository = new ProfilesRepository();
const usersRepository = new UsersRepository();

const getProfileUseCase = new GetProfileUseCase(
  usersRepository,
  profilesRepository
);

const getProfileController = new GetProfileController(getProfileUseCase);

export { getProfileController };
