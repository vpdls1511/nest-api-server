import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(id, pw): String {
    return 'create'
  }
}
