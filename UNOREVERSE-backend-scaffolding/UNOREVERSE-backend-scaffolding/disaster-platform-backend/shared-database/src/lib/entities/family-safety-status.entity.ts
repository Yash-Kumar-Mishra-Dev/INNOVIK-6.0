import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class FamilySafetyStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  citizen_id: string;

  @Column()
  family_member_id: string;

  @Column({ default: 'Unknown' })
  status: string; // Safe, NeedHelp, Missing, Unknown

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
