import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPriorityFields1700000000000 implements MigrationInterface {
    name = 'AddPriorityFields1700000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mission" ADD "actual_priority" double precision`);
        await queryRunner.query(`ALTER TABLE "mission" ADD "priority_method" character varying NOT NULL DEFAULT 'formula'`);
        
        await queryRunner.query(`CREATE TABLE "training_sample" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mission_id" character varying NOT NULL, "features" jsonb, "actual_priority" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_training_sample_id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "training_sample"`);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "priority_method"`);
        await queryRunner.query(`ALTER TABLE "mission" DROP COLUMN "actual_priority"`);
    }
}
