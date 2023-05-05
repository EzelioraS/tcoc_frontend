import { Login, Register } from "~/types/credentials";
import HttpFactory from "./factory";


class AuthModule {

    private RESOURCE = '/authentication';

    async login(credentials: Login){
        return await HttpFactory.request('POST', `${this.RESOURCE}/login`, credentials)
    }
    async register(credentials: Register) {
        return await HttpFactory.request('POST', `${this.RESOURCE}/register`, credentials)
    }
}
export default AuthModule;