import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/admin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dashboard/status')
  getDashboardStatus() {
    return this.appService.getDashboardStatus();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('users/:id/role')
  changeUserRole(@Param('id') id: string, @Body() body: any) {
    return this.appService.changeUserRole(id, body.role);
  }

  @Get('audit-logs')
  getAuditLogs() {
    return this.appService.getAuditLogs();
  }

  @Put('settings')
  updateSettings(@Body() body: any) {
    return { status: 'updated' };
  }

  @Get('resources')
  getResources() {
    return { resources: [] };
  }

  @Post('backup/run')
  runBackup() {
    return this.appService.runBackup();
  }

  @Post('backup/:id/restore')
  restoreBackup(@Param('id') id: string) {
    return this.appService.restoreBackup(id);
  }
}
