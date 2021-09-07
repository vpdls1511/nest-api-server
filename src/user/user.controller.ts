import { Controller, Delete, Get, HttpException, HttpStatus, Patch, Post, Query } from "@nestjs/common";
import { UserService } from './user.service';
import { UserInterfaces } from "./user.interfaces";
import { loginInformationDTO } from "./dto/userAccount.dto";
import { User } from "./entity/user.entity";

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Post() // Create
  createUser() {
    return this.userService.createUser('test1','test12');
  }

  @Get() // Read
  async readUserData(@Query() loginInformation: loginInformationDTO): Promise<User> {

    const userList = await this.userService.getUserData(loginInformation)
    if(!userList) throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)

    return Object.assign({
      data : userList,
      statusCode : 200,
      statusMsg : 'Success'
    })
  }

  @Patch() // Update
  updateUserData() {
    return 'update';
  }

  @Delete() // Delete
  deleteUser() {
    return 'delete';
  }

}
