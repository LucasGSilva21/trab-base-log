import { DeleteCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgDeleteCustomerRepository extends PgRepository implements DeleteCustomerRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async delete (id: string): Promise<void> {
    if (!this.uUIDValidator.isValid(id)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    const pgCustomerRepo = this.getRepository(PgCustomer)

    const customer = await pgCustomerRepo.findOne(id)

    if (!customer) {
      throw new NotFoundError(id)
    }

    await pgCustomerRepo.delete(id)
  }
}
