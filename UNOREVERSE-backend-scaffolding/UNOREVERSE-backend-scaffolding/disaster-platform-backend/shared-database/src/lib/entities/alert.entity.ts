import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Alert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  severity: string;

  @Column('text')
  message: string;

  @Column()
  target_audience: string;

  @Column('simple-array')
  channel: string[];

  @Column({ type: 'timestamp', nullable: true })
  sent_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
