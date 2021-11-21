import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgSale, PgCustomer, PgProduct } from '../../../../src/infra/databases/postgres/entities'
import { Gender } from '../../../../src/domain/protocols/enums'

describe('Add Sales Route', () => {
  let connection: PgConnection
  let pgSaleRepo: Repository<PgSale>
  let pgCustomerRepo: Repository<PgCustomer>
  let pgProductRepo: Repository<PgProduct>

  beforeAll(async () => {
    connection = PgConnection.getInstance()
    await connection.connect()
    await connection.runMigrations()
    pgSaleRepo = connection.getRepository(PgSale)
    pgCustomerRepo = connection.getRepository(PgCustomer)
    pgProductRepo = connection.getRepository(PgProduct)
  })

  afterAll(async () => {
    await pgSaleRepo.delete({})
    await pgCustomerRepo.delete({})
    await pgProductRepo.delete({})
    await connection.disconnect()
  })

  beforeEach(async () => {
    await pgSaleRepo.delete({})
    await pgCustomerRepo.delete({})
    await pgProductRepo.delete({})
  })

  test('Should add a new sale', async () => {
    const customerId = (await pgCustomerRepo.save({
      name: 'test',
      email: 'test@test.com',
      cpf: '111.111.111-11',
      birthDate: new Date(),
      gender: Gender.MALE,
      phone: '(11) 99999-9999',
      address: 'test'
    })).id

    const productId = (await pgProductRepo.save({
      name: 'test1',
      description: 'test1',
      purchasePrice: 30,
      salePrice: 40,
      quantity: 10
    })).id

    await request(app)
      .post('/api/sales')
      .send({
        productId,
        customerId,
        saleDate: '2021-11-21',
        quantity: 1
      })
      .expect(200)
  })
})
