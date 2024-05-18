import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            clientID:" ",
            clientSecret:"",
            callbackURL:"",
            scope:["profile","email"]
        });
    }

    async validate(accessToken:string, refreshToken:string, profile:Profile){
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    }
}