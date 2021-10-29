import { GetAllCustomerController } from '../../../presentation/controllers/customer'
import { Controller } from '../../../presentation/protocols'
import { GetAllCustomer } from '../../../domain/usecases/customer'
import { PgGetAllCustomerRepository } from '../../../infra/databases/postgres/repositories/customer'

export const makeGetAllCustomerController = (): Controller => {
  const pgGetAllCustomerRepository = new PgGetAllCustomerRepository()
  const getAllCustomer = new GetAllCustomer(pgGetAllCustomerRepository)
  return new GetAllCustomerController(getAllCustomer)
}
