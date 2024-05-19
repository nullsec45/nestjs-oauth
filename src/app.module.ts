import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.DATABASE_HOST,
      port:parseInt(process.env.DATABASE_PORT),
      username:process.env.DATABASE_USERNAME,
      password:process.env.DATABASE_PASSWORD,
      database:process.env.DATABASE_NAME,
      entities:[User],
      synchronize:true
    }),
    PassportModule.register({session:true})
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}