import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "./orm.config";

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
