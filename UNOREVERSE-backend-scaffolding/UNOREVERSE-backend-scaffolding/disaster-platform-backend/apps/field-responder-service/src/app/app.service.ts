import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mission, Incident, Team } from '@disaster-platform-backend/shared-database';

@Injectable()
export class AppService  {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,

    @InjectRepository(Mission) private missionRepo: Repository<Mission>,
    @InjectRepository(Incident) private incidentRepo: Repository<Incident>,
    @InjectRepository(Team) private teamRepo: Repository<Team>,
  ) {}

  getMissions() {
    return this.missionRepo.find({ order: { priority_score: 'DESC' } });
  }

  getMissionDetails(id: string) {
    return this.missionRepo.findOne({ where: { id } });
  }

  async verifyIncident(id: string, data: any) {
    const mission = await this.missionRepo.findOne({ where: { id } });
    if (mission) {
      await this.incidentRepo.update(mission.incident_id, { status: 'Verified', verified_by: 'field-responder' });
      return { id, status: 'Verified' };
    }
    return { id, status: 'Not Found' };
  }

  async escalateMission(id: string, data: any) {
    await this.missionRepo.update(id, { priority_score: 100, status: 'Escalated' });
    return { id, status: 'Escalated' };
  }

  async updateTeamStatus(data: any) {
    if (data.team_id) {
      await this.teamRepo.update(data.team_id, { status: data.status });
    }
    return { status: 'Updated' };
  }
}
