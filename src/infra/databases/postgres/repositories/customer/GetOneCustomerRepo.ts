import { CustomerModel } from '../../../../../domain/models/Customer'
import { GetOneCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgGetOneCustomerRepository extends PgRepository implements GetOneCustomerRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async getOne (id: string): Promise<CustomerModel | undefined> {
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

    return customer
  }
}
