import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TrainingSample {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mission_id: string;

  @Column('simple-json', { nullable: true })
  features: Record<string, any>;

  @Column('float')
  actual_priority: number;

  @CreateDateColumn()
  created_at: Date;
}
