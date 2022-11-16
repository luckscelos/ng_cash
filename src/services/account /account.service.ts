import { AppDataSource } from "../../data-source";
import Account from "../../entities/accounts.entity";
import { IAccountRequest } from "../../interfaces/Account";


const createAccountService = async ({balance}:IAccountRequest)=>{


    const accountRespository = AppDataSource.getRepository(Account)

    const account = accountRespository.create({
        balance 
    }) 

    return account
}
export default createAccountService