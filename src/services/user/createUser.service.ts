import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/Users";
import { hash } from 'bcryptjs';
import { AppError } from "../../errors/appError";
import Account from "../../entities/accounts.entity";

const createUserService =async ({username , password}:IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User);

    const accountRespository = AppDataSource.getRepository(Account)

    const users = await userRepository.find();


    const usernameAlreadyExists = users.find(user => user.username === username);
    if (usernameAlreadyExists) {
        throw new AppError('Username already exists');
      }


    const hashedPass = await hash(password, 10)
    
    const account  = accountRespository.create({
        balance: 100,   
    })

    const user = userRepository.create({
      
        username,
        password:hashedPass,
        accountId:account
    })

    
  await userRepository.save(user);

  return user;   
}
export default createUserService

