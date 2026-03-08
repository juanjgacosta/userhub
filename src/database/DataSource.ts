import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  synchronize: false,
  logging: false,
  entities: ['./src/modules/users/entities/**.ts'],
  migrations: ['./src/database/migrations/**.ts'],
  migrationsRun: false,
})

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connection ok')

    await AppDataSource.runMigrations()
    console.log('Migrations executed successfully')
  })
  .catch((err) => {
    console.error('Database error connection: ', err)
  })
