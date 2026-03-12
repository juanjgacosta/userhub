import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUserAddIsAdmin1773334075766 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'isAdmin',
        type: 'boolean',
        default: false,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'isAdmin')
  }
}
