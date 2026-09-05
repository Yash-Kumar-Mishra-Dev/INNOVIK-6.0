import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService  {
  constructor(@Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka) {}

  getData() {
    return { message: 'CRUD operations for backup-recovery-service' };
  }
}
