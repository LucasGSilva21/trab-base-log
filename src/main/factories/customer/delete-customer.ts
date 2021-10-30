import { Controller } from '../../../presentation/protocols'
import { DeleteCustomerController } from '../../../presentation/controllers/customer'
import { DeleteCustomer } from '../../../domain/usecases/customer'
import { PgDeleteCustomerRepository } from '../../../infra/databases/postgres/repositories/customer'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeDeleteCustomerController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgDeleteCustomerRepository = new PgDeleteCustomerRepository(uUIDValidatorAdapter)
  const deleteCustomer = new DeleteCustomer(pgDeleteCustomerRepository)
  return new DeleteCustomerController(deleteCustomer)
}
