import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgProduct } from '../../../../src/infra/databases/postgres/entities'

describe('SignUp Routes', () => {
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

  test('Should return a product on success', async () => {
    await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 30,
        salePrice: 40,
        quantity: 10
      })
      .expect(200)
  })
})
