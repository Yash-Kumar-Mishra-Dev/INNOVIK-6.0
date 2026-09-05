import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  actor_id: string;

  @Column()
  action: string;

  @Column()
  entity: string;

  @Column('jsonb', { nullable: true })
  before: any;

  @Column('jsonb', { nullable: true })
  after: any;

  @CreateDateColumn()
  timestamp: Date;
}
