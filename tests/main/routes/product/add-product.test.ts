import request from 'supertest'
import { app } from '../../../../src/main/config/app'
import { Repository } from 'typeorm'
import { PgConnection } from '../../../../src/infra/databases/postgres/helpers/connection'
import { PgProduct } from '../../../../src/infra/databases/postgres/entities'

describe('Add Product Route', () => {
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

  test('Should return a missing param error if not send name field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        description: 'test',
        purchasePrice: 30,
        salePrice: 40,
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'name is required'
    })
  })

  test('Should return a missing param error if not send purchase price field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        salePrice: 40,
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'purchasePrice is required'
    })
  })

  test('Should return a missing param error if not send sale price field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 30,
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'salePrice is required'
    })
  })

  test('Should return a missing param error if not send quantity field', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 30,
        salePrice: 40
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'MissingParamError',
      message: 'quantity is required'
    })
  })

  test('Should return a invalid param error if purchase price field is not a number', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 'invalid',
        salePrice: 40,
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'Purchase price must be a number'
    })
  })

  test('Should return a invalid param error if sale price field is not a number', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 30,
        salePrice: 'invalid',
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'Sale price must be a number'
    })
  })

  test('Should return a invalid param error if quantity field is not a positive integer', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 30,
        salePrice: 40,
        quantity: -10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'The quantity must be a positive integer'
    })
  })

  test('Should return a invalid param error if purchase price more than sale price', async () => {
    const { body, statusCode } = await request(app)
      .post('/api/products')
      .send({
        name: 'test',
        description: 'test',
        purchasePrice: 40,
        salePrice: 30,
        quantity: 10
      })

    expect(statusCode).toBe(400)
    expect(body).toEqual({
      name: 'InvalidParamError',
      message: 'Sale price must be greater than to purchase price'
    })
  })
})
