import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employee.module';


@Module({
  imports: [MongooseModule.forRoot(`mongodb://mydbuser:123456@127.0.0.1:27017/nestdemo?directConnection=true`),EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
