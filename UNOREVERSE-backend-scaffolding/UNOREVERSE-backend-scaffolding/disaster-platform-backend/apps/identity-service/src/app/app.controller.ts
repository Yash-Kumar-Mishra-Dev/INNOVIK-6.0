import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() body: any) {
    return this.appService.login(body);
  }

  @Post('refresh')
  refresh(@Body() body: any) {
    return { access_token: 'new-jwt-token' };
  }
}
