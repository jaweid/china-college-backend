import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CollegeModule } from './college/college.module';
import { BachelorPointsModule } from './bachelor-points/backelor.module';
import { MasterPointsModule } from './master-points/master.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'123456',
      database:'test',
      autoLoadEntities: true,
      synchronize:true
    }),
    UsersModule,CollegeModule,BachelorPointsModule,MasterPointsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
