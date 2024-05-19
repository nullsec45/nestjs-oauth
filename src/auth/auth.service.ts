import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private  readonly userRepository:Repository<User>){

  }

  async validateUser(details:UserDetails){
    console.log(details);
    const user=await this.userRepository.findOneBy({email:details.email});

    if (user) return user;
    const newUser=this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }

  async findUser(id:number){
    const user=await this.userRepository.findOneBy({id});
    return user;
  }
}
