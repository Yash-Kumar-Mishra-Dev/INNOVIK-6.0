import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  incident_id: string;

  @Column()
  citizen_id: string;

  @Column('text')
  description: string;

  @Column('simple-array', { nullable: true })
  media_ids: string[];

  @Column({ default: 'Submitted' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
