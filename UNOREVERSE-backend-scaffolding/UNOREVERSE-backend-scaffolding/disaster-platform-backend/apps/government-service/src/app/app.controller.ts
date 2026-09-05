import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/gov')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dashboard/summary')
  getDashboardSummary() {
    return this.appService.getDashboardSummary();
  }

  @Get('map/live')
  getLiveMap() {
    return this.appService.getLiveMap();
  }

  @Get('resources')
  getResources() {
    return this.appService.getResources();
  }

  @Get('budget')
  getBudget() {
    return this.appService.getBudget();
  }

  @Get('analytics/trends')
  getTrends() {
    return { trends: [] };
  }

  @Get('departments/status')
  getDepartmentStatus() {
    return { departments: [] };
  }

  @Post('alerts')
  broadcastAlert(@Body() body: any) {
    return this.appService.broadcastAlert(body);
  }

  @Post('responders/deploy')
  deployResponder(@Body() body: any) {
    return { status: 'deployed' };
  }
}
