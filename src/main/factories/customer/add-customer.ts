import { AddCustomerController } from '../../../presentation/controllers/customer'
import { Controller } from '../../../presentation/protocols'
import { AddCustomer } from '../../../domain/usecases/customer'
import { AddCustomerValidator } from '../../../domain/validators/customer'
import { PgAddCustomerRepository } from '../../../infra/databases/postgres/repositories/customer'
import { EmailValidatorAdapter, PhoneValidatorAdapter } from '../../../utils/validators/adapters'

export const makeAddCustomerController = (): Controller => {
  const pgAddCustomerRepository = new PgAddCustomerRepository()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const phoneValidatorAdapter = new PhoneValidatorAdapter()
  const addCustomerValidator = new AddCustomerValidator(emailValidatorAdapter, phoneValidatorAdapter)
  const addCustomer = new AddCustomer(pgAddCustomerRepository, addCustomerValidator)
  return new AddCustomerController(addCustomer)
}
