import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {AppDataSource} from '../../data-source';
import User from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserLogin } from '../../interfaces/Users';

const createSessionService = async ({ password, username }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ username: username });

  if (!users) {
    throw new AppError('Wrong username/password', 403);
  }

  if (!compareSync(password, users.password)) {
    throw new AppError('Wrong username/password', 403);
  }

  const token = jwt.sign(
    username,
    String(process.env.SECRET_KEY),
    { expiresIn: '24h', subject: users.id },
  );
    
  return token;
};

export { createSessionService };
