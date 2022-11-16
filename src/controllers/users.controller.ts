import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import createUserService from '../services/user/createUser.service';

const createUserConntroller = async (req: Request, res: Response)=>{
  const{username,password,accountId} = req.body
  
  const user = await createUserService({username,password,accountId});

  return res.status(201).json(instanceToInstance(user));
}
export default createUserConntroller
