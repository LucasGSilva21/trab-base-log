import { AddClientController } from '../../../presentation/controllers/client'
import { Controller } from '../../../presentation/protocols'
import { AddClient } from '../../../domain/usecases/client'
import { AddClientValidator } from '../../../domain/validators/client'
import { PgAddClientRepository } from '../../../infra/databases/postgres/repositories/client'
import { EmailValidatorAdapter } from '../../../utils/validators/adapters'

export const makeAddClientController = (): Controller => {
  const pgAddClientRepository = new PgAddClientRepository()
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const addClientValidator = new AddClientValidator(emailValidatorAdapter)
  const addClient = new AddClient(pgAddClientRepository, addClientValidator)
  return new AddClientController(addClient)
}
