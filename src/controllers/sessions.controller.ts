import { Request, Response } from 'express';
import { createSessionService 
} from '../services/sessions/login.service';

const createSessionController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const token = await createSessionService({ username, password });

  return res.status(200).json({ token });
};

export { createSessionController };
