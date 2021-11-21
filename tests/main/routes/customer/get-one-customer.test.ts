import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgCustomer } from '../../../../src/infra/databases/postgres/entities'
import { Gender } from '../../../../src/domain/protocols/enums'

describe('Get One Customer Route', () => {
  let connection: PgConnection
  let PgCustomerRepo: Repository<PgCustomer>

  beforeAll(async () => {
    connection = PgConnection.getInstance()
    await connection.connect()
    await connection.runMigrations()
    PgCustomerRepo = connection.getRepository(PgCustomer)
  })

  afterAll(async () => {
    await PgCustomerRepo.delete({})
    await connection.disconnect()
  })

  beforeEach(async () => {
    await PgCustomerRepo.delete({})
  })

  test('Should return a customer on success', async () => {
    const { id } = await PgCustomerRepo.save({
      name: 'test',
      email: 'test@test.com',
      cpf: '111.111.111-11',
      birthDate: new Date(),
      gender: Gender.MALE,
      phone: '(11) 99999-9999',
      address: 'test'
    })

    const { body, statusCode } = await request(app).get(`/api/customers/${id}`)

    expect(statusCode).toBe(200)
    expect(body.id).toBe(id)
  })
})
