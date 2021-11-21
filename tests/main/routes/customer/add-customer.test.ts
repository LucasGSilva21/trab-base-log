import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgCustomer } from '../../../../src/infra/databases/postgres/entities'

describe('Add Customer Route', () => {
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
    await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })
      .expect(200)
  })

  // Missing Fields
  test('Should return a missing param error if not send name field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'name is required'
    })
  })

  test('Should return a missing param error if not send email field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'email is required'
    })
  })

  test('Should return a missing param error if not send cpf field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'cpf is required'
    })
  })

  test('Should return a missing param error if not send birth date field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'birthDate is required'
    })
  })

  test('Should return a missing param error if not send gender field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'gender is required'
    })
  })

  test('Should return a missing param error if not send phone field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'phone is required'
    })
  })

  test('Should return a missing param error if not send address field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'address is required'
    })
  })

  // Invalid Field
  test('Should return a invalid param error if email field is not valid', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'invalid email'
    })
  })

  test('Should return a invalid param error if cpf field is not valid', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'invalid cpf'
    })
  })

  test('Should return a invalid param error if birth date field is not a date', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: 'test',
        gender: 'MALE',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'invalid birth date'
    })
  })

  test('Should return a invalid param error if gender field is not valid', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'test',
        phone: '(11) 99999-9999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'invalid gender value'
    })
  })

  test('Should return a invalid param error if phone field is not valid', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/customers')
      .send({
        name: 'test',
        email: 'test@test.com',
        cpf: '111.111.111-11',
        birthDate: new Date(),
        gender: 'MALE',
        phone: '(11) 999999',
        address: 'test'
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'invalid phone'
    })
  })
})
