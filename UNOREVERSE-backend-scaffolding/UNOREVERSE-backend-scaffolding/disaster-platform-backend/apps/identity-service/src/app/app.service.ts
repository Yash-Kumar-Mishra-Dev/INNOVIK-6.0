import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@disaster-platform-backend/shared-database';

@Injectable()
export class AppService  {
  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,
@InjectRepository(User) private userRepo: Repository<User>) {}

  async login(body: any) {
    // Basic stub logic mapping to DB
    const user = await this.userRepo.findOne({ where: { email: body.email } });
    if (!user && body.email) {
       // Create dummy user for demo if needed
       const newUser = await this.userRepo.save(this.userRepo.create({ name: 'Demo', email: body.email, role_id: '1', status: 'active' }));
       return { access_token: 'jwt-token-' + newUser.id, refresh_token: 'refresh-token' };
    }
    return { access_token: 'jwt-token', refresh_token: 'refresh-token' };
  }
}
