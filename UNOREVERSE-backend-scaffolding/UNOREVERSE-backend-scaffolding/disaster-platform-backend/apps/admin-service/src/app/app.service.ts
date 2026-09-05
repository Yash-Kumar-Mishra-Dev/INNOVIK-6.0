import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, AuditLog, BackupRecord } from '@disaster-platform-backend/shared-database';

@Injectable()
export class AppService  {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,

    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(AuditLog) private auditRepo: Repository<AuditLog>,
    @InjectRepository(BackupRecord) private backupRepo: Repository<BackupRecord>,
  ) {}

  async getDashboardStatus() {
    const users = await this.userRepo.count();
    return { users, uptime: '100%' };
  }

  getUsers() {
    return this.userRepo.find();
  }

  async changeUserRole(id: string, role: string) {
    await this.userRepo.update(id, { role_id: role });
    return { id, role };
  }

  getAuditLogs() {
    return this.auditRepo.find({ order: { timestamp: 'DESC' } });
  }

  async runBackup() {
    const backup = this.backupRepo.create({ scope: 'full', status: 'Pending', started_at: new Date() });
    return this.backupRepo.save(backup);
  }

  async restoreBackup(id: string) {
    return { id, status: 'Restore Triggered' };
  }
}
