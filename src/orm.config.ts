import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./user/entity/user.entity";

export const config : TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port : 3306,
  username : 'root',
  password : 'root',
  database: 'authtest',
  entities : [User],
  synchronize : true,
}
