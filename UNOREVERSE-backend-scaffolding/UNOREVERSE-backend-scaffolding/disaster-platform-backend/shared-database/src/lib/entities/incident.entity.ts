import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  severity: string;

  @Column('float')
  lat: number;

  @Column('float')
  lng: number;

  @Column({ default: 'Unverified' })
  status: string;

  @Column({ nullable: true })
  reported_by: string;

  @Column({ nullable: true })
  verified_by: string;

  @Column()
  source: string; // citizen, sensor, field

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
