import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('api/v1/weather')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getData() {
    return this.appService.getData();
  }
}
