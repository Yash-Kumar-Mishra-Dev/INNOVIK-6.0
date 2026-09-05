import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  incident_id: string;

  @Column({ nullable: true })
  assigned_team_id: string;

  @Column('float')
  priority_score: number;

  @Column('float', { nullable: true })
  actual_priority: number;

  @Column({ type: 'varchar', default: 'formula' })
  priority_method: 'formula' | 'learned';

  @Column('simple-array')
  required_resources: string[];

  @Column({ type: 'timestamp', nullable: true })
  deadline: Date;

  @Column({ default: 'Pending' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
