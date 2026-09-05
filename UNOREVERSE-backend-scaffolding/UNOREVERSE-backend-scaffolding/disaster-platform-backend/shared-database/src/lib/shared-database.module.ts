import { Module } from '@nestjs/common';
import { SensingService } from './sensing.service';

@Module({
  controllers: [],
  providers: [SensingService],
  exports: [SensingService],
})
export class SharedDatabaseModule {}
