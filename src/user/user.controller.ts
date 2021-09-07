import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Post() // Create
  createUser() {
    return this.userService.createUser('test1','test12');
  }

  @Get() // Read
  readUserData() {
    return 'user';
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
