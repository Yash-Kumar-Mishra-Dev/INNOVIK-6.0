import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ChatSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  citizen_id: string;

  @Column({ default: 'en' })
  language: string;

  @Column('jsonb', { default: [] })
  messages: any[];

  @Column({ default: false })
  resolved: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
