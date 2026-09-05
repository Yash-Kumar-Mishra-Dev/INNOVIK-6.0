import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident, Report, FamilySafetyStatus } from '@disaster-platform-backend/shared-database';

@Injectable()
export class AppService  {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,

    @InjectRepository(Incident) private incidentRepo: Repository<Incident>,
    @InjectRepository(Report) private reportRepo: Repository<Report>,
    @InjectRepository(FamilySafetyStatus) private familySafetyRepo: Repository<FamilySafetyStatus>,
  ) {}

  async submitSos(data: any) {
    const incident = this.incidentRepo.create({
      type: data.type || 'SOS',
      severity: 'Critical',
      lat: data.lat || 0,
      lng: data.lng || 0,
      source: 'citizen',
      status: 'Unverified'
    });
    return this.incidentRepo.save(incident);
  }

  async submitReport(data: any) {
    const report = this.reportRepo.create({
      citizen_id: data.citizen_id,
      incident_id: data.incident_id,
      description: data.description,
      status: 'Submitted'
    });
    return this.reportRepo.save(report);
  }

  async getReportStatus(id: string) {
    return this.reportRepo.findOne({ where: { id } });
  }

  async updateFamilySafety(data: any) {
    const status = this.familySafetyRepo.create({
      citizen_id: data.citizen_id,
      family_member_id: data.family_member_id,
      status: data.status,
    });
    return this.familySafetyRepo.save(status);
  }
}
