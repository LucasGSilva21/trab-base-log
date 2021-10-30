import { UpdateCustomerController } from '../../../presentation/controllers/customer'
import { Controller } from '../../../presentation/protocols'
import { UpdateCustomer } from '../../../domain/usecases/customer'
import { UpdateCustomerValidator } from '../../../domain/validators/customer'
import { PgUpdateCustomerRepository } from '../../../infra/databases/postgres/repositories/customer'
import { UUIDValidatorAdapter, EmailValidatorAdapter } from '../../../utils/validators/adapters'

export const makeUpdateCustomerController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgUpdateCustomerRepository = new PgUpdateCustomerRepository(uUIDValidatorAdapter)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const updateCustomerValidator = new UpdateCustomerValidator(emailValidatorAdapter)
  const updateCustomer = new UpdateCustomer(pgUpdateCustomerRepository, updateCustomerValidator)
  return new UpdateCustomerController(updateCustomer)
}
