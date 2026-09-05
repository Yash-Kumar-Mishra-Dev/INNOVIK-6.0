import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { SensingService } from '@disaster-platform-backend/shared-database';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly anomalyServiceUrl = process.env.ANOMALY_SERVICE_URL || 'http://127.0.0.1:8000';

  constructor(
    @Inject("KAFKA_SERVICE") private readonly kafkaClient: ClientKafka,
    private readonly sensingService: SensingService
  ) {}

  getData() {
    return { message: 'CRUD operations for mission-service' };
  }

  /**
   * Example integration for creating a mission with hybrid priority and sensing
   */
  async createMissionWithPriority(payload: any) {
    this.logger.log(`Creating mission for incident ${payload.incident_id}`);

    // 1. Invoke Sensing module to fuse sensor data
    const sensingResult = await this.sensingService.fuseSensorsV1(
      payload.mission_id,
      payload.sensor_data || [],
      this.kafkaClient,
    );
    
    // 2. Fetch Hybrid Priority Score from AI Service
    let priorityData = { computed_priority: 50, priority_method: 'formula', actual_priority: 50 };
    try {
      const response = await axios.post(`${this.anomalyServiceUrl}/ai/priority/score`, {
        incident_id: payload.incident_id,
        required_resources: payload.required_resources || [],
        features: sensingResult
      });
      priorityData = response.data;
    } catch (err) {
      this.logger.error('Failed to fetch priority score, falling back to defaults', err);
    }

    // 3. Save to database (mocked here, assume TypeORM repository save)
    const newMission = {
      ...payload,
      priority_score: priorityData.computed_priority,
      actual_priority: priorityData.actual_priority,
      priority_method: priorityData.priority_method,
      status: 'Pending'
    };

    // emit to kafka
    this.kafkaClient.emit('mission.created', newMission);
    
    return newMission;
  }
}
