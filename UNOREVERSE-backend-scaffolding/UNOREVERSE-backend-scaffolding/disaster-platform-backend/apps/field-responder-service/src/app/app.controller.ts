import { EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/field')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('missions')
  getMissions() {
    return this.appService.getMissions();
  }

  @Get('missions/:id')
  getMissionDetails(@Param('id') id: string) {
    return this.appService.getMissionDetails(id);
  }

  @Post('missions/:id/verify')
  verifyIncident(@Param('id') id: string, @Body() body: any) {
    return this.appService.verifyIncident(id, body);
  }

  @Post('missions/:id/escalate')
  escalateMission(@Param('id') id: string, @Body() body: any) {
    return this.appService.escalateMission(id, body);
  }

  @Put('team/status')
  updateTeamStatus(@Body() body: any) {
    return this.appService.updateTeamStatus(body);
  }

  @Get('navigation/:missionId')
  getNavigation(@Param('missionId') missionId: string) {
    return { route: [] };
  }

  @Post('media')
  uploadMedia(@Body() body: any) {
    return { status: 'Uploaded' };
  }

  @Post('comms')
  sendComms(@Body() body: any) {
    return { status: 'Sent' };
  }
}
