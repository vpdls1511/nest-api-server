import { Injectable, Query } from "@nestjs/common";
import { UserInterfaces } from "./user.interfaces";
import { loginInformationDTO } from "./dto/userAccount.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>
  ) {}

  getAllUserData() : Promise<User[]>{
    return this.userRepository.find();
  }
  getUserData(loginInformation : loginInformationDTO) : Promise<User>{
    const {username , password} = loginInformation
    return this.userRepository.findOne({
      where:{
        username : username
      }
    });
  }

  createUser(id, pw): String {
    return 'create'
  }
}
