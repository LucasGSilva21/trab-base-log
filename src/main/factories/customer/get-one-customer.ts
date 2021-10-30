import { GetOneCustomerController } from '../../../presentation/controllers/customer'
import { Controller } from '../../../presentation/protocols'
import { GetOneCustomer } from '../../../domain/usecases/customer'
import { PgGetOneCustomerRepository } from '../../../infra/databases/postgres/repositories/customer'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeGetOneCustomerController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgGetOneCustomerRepository = new PgGetOneCustomerRepository(uUIDValidatorAdapter)
  const getOneCustomer = new GetOneCustomer(pgGetOneCustomerRepository)
  return new GetOneCustomerController(getOneCustomer)
}
