import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/citizen')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dashboard')
  getDashboard() {
    return { location: 'unknown', warnings: [] };
  }

  @Post('sos')
  transmitSos(@Body() body: any) {
    return this.appService.submitSos(body);
  }

  @Post('reports')
  submitReport(@Body() body: any) {
    return this.appService.submitReport(body);
  }

  @Get('reports/:id/status')
  getReportStatus(@Param('id') id: string) {
    return this.appService.getReportStatus(id);
  }

  @Get('map/safety')
  getSafetyMap() {
    return { safe_zones: [], danger_zones: [] };
  }

  @Post('family-safety')
  updateFamilySafety(@Body() body: any) {
    return this.appService.updateFamilySafety(body);
  }

  @Post('chat')
  chat(@Body() body: any) {
    return { reply: 'Redirect to chatbot-service' };
  }

  @Get('alerts')
  getAlerts() {
    return { alerts: [] };
  }
}
