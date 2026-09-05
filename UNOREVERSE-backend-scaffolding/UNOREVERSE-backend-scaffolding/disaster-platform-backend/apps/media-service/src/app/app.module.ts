import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedDatabaseModule, User, Role, Department, Incident, Report, Mission, Team, Resource, Shelter, Alert, Budget, FamilySafetyStatus, AnomalyFlag, AuditLog, BackupRecord, ChatSession } from '@disaster-platform-backend/shared-database';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'media-service',
            brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
          },
          consumer: {
            groupId: 'media-service-client-group'
          }
        }
      }
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: 'disaster_admin',
      password: 'disaster_password',
      database: 'disaster_platform',
      entities: [User, Role, Department, Incident, Report, Mission, Team, Resource, Shelter, Alert, Budget, FamilySafetyStatus, AnomalyFlag, AuditLog, BackupRecord, ChatSession],
      synchronize: true, // For development only
    }),
    TypeOrmModule.forFeature([User, Role, Department, Incident, Report, Mission, Team, Resource, Shelter, Alert, Budget, FamilySafetyStatus, AnomalyFlag, AuditLog, BackupRecord, ChatSession]),
    SharedDatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
