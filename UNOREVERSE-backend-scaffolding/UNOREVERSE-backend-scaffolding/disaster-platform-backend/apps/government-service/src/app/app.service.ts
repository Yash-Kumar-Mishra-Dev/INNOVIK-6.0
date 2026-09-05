import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident, Alert, Resource, Budget, Department } from '@disaster-platform-backend/shared-database';

@Injectable()
export class AppService  {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,

    @InjectRepository(Incident) private incidentRepo: Repository<Incident>,
    @InjectRepository(Alert) private alertRepo: Repository<Alert>,
    @InjectRepository(Resource) private resourceRepo: Repository<Resource>,
    @InjectRepository(Budget) private budgetRepo: Repository<Budget>,
    @InjectRepository(Department) private deptRepo: Repository<Department>,
  ) {}

  async getDashboardSummary() {
    const activeIncidents = await this.incidentRepo.count({ where: { status: 'Unverified' } }); // Example
    const criticalAlerts = await this.alertRepo.count({ where: { severity: 'Critical' } });
    return { active_incidents: activeIncidents, critical_alerts: criticalAlerts };
  }

  async getLiveMap() {
    const incidents = await this.incidentRepo.find();
    return { markers: incidents };
  }

  async getResources() {
    return this.resourceRepo.find();
  }

  async getBudget() {
    return this.budgetRepo.find();
  }

  async broadcastAlert(data: any) {
    const alert = this.alertRepo.create({
      type: data.type,
      severity: data.severity,
      message: data.message,
      target_audience: data.target_audience,
      channel: data.channel || ['sms', 'push'],
      sent_at: new Date()
    });
    return this.alertRepo.save(alert);
  }
}
