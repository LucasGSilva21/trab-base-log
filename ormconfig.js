require('dotenv').config()

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/infra/databases/postgres/entities/index.{js,ts}'],
  migrations: ['src/infra/databases/postgres/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/infra/databases/postgres/migrations'
  }
}
