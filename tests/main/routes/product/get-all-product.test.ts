import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgProduct } from '../../../../src/infra/databases/postgres/entities'

describe('Get All Product Route', () => {
  let connection: PgConnection
  let pgProductRepo: Repository<PgProduct>

  beforeAll(async () => {
    connection = PgConnection.getInstance()
    await connection.connect()
    await connection.runMigrations()
    pgProductRepo = connection.getRepository(PgProduct)
  })

  afterAll(async () => {
    await pgProductRepo.delete({})
    await connection.disconnect()
  })

  beforeEach(async () => {
    await pgProductRepo.delete({})
  })

  test('Should return a list products on success', async () => {
    await pgProductRepo.save({
      name: 'test1',
      description: 'test1',
      purchasePrice: 30,
      salePrice: 40,
      quantity: 10
    })

    await pgProductRepo.save({
      name: 'test2',
      description: 'test2',
      purchasePrice: 30,
      salePrice: 40,
      quantity: 10
    })

    const { body, statusCode } = await request(app)
      .get('/api/products')

    expect(statusCode).toBe(200)
    expect(body).toHaveLength(2)
  })
})
