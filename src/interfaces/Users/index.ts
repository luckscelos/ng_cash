import { IAccountRequest } from "../Account"

export interface IUserRequest{
    username: string
    password:string
    accountId:IAccountRequest
}

export interface IUserLogin{
    username: string
    password:string
}