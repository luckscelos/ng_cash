import { Request, Response } from 'express';
import createAccountService from '../services/account /account.service';


const createAccountController = async (req: Request, res: Response)=>{  

    const {balance} = req.body
    const account  = await createAccountService({balance})

    return res.status(200).json(account)

}
export default createAccountController