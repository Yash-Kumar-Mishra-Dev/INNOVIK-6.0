import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService  {
  constructor(@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('system.event');
    await this.kafkaClient.connect();
  }

  publishEvent(topic: string, data: any) {
    return this.kafkaClient.emit(topic, data);
  }

  getData() {
    return { message: 'CRUD operations mapped for incident-service' };
  }
}
