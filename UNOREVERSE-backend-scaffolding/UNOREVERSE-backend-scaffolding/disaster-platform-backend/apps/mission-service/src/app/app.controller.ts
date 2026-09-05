import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('v1/mission')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  async createMission(@Body() payload: any) {
    return this.appService.createMissionWithPriority(payload);
  }
}
