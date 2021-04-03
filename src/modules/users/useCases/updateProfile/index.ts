import { ProfilesRepository } from '../../infra/prisma/ProfilesRepository';
import { UsersRepository } from '../../infra/prisma/UsersRepository';
import { UpdateProfileController } from './UpdateProfileController';
import { UpdateProfileUseCase } from './UpdateProfileUseCase';

const profilesRepository = new ProfilesRepository();
const usersRepository = new UsersRepository();

const updateProfileUseCase = new UpdateProfileUseCase(
  profilesRepository,
  usersRepository
);

const updateProfileController = new UpdateProfileController(
  updateProfileUseCase
);

export { updateProfileController };
