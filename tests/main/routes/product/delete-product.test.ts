import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgProduct } from '../../../../src/infra/databases/postgres/entities'

describe('Delete Product Route', () => {
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

  test('Should delete a product on success', async () => {
    const { id } = await pgProductRepo.save({
      name: 'test1',
      description: 'test1',
      purchasePrice: 30,
      salePrice: 40,
      quantity: 10
    })

    const { statusCode } = await request(app)
      .delete(`/api/products/${id}`)

    expect(statusCode).toBe(204)
  })
})
