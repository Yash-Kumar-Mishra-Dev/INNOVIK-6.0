import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AnomalyFlag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  source_type: string;

  @Column('float')
  baseline_value: number;

  @Column('float')
  current_value: number;

  @Column()
  zone: string;

  @Column({ default: 'Active' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
