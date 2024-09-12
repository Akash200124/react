import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteprojectId);
        this.account = new Account(this.client)
    }

    async creatAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                //call a method and login 
             return  this.login({email,password});

            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session
        } catch (error) {
            throw error;
        }

    }

    async getCurrentUser(){
        try {
            // user login 
        return   await this.account.get();

        } catch (error) {
            // user not login 
            throw error ;
        }

        return null ;
    }

    async logout (){
        try {
            await this.account.deleteSessions();

        } catch (error) {
            console.log("error in logout the sessions:: " ,error)
        }
    }
}



 
const authService = new AuthService();
export default authService;
