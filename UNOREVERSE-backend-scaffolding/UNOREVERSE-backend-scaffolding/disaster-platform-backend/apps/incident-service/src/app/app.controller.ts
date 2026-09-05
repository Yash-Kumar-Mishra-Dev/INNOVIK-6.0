import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('api/v1/incident')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('system.event')
  handleSystemEvent(@Payload() message: any) {
    console.log('incident-service received Kafka event: ', message);
  }
}
