import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import {User} from "../../typeorm/entities/User";
import { AuthService } from "../auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(
        @Inject("AUTH_SERVICE") private readonly authService: AuthService
    ){
        super();
    }

    serializeUser(user: any, done: Function) {
        done(null, user)
    }

    async deserializeUser(payload: any, done: Function) {
        const user=this.authService.findUser(payload.id);
        console.log(user);
        return user ? done(null, user) : done(null, null);
    }
}