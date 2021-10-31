import { DeleteSaleRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { PgSale } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgDeleteSaleRepository extends PgRepository implements DeleteSaleRepository {
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

    const pgSaleRepo = this.getRepository(PgSale)

    const sale = await pgSaleRepo.findOne(id)

    if (!sale) {
      throw new NotFoundError(id)
    }

    await pgSaleRepo.delete(id)
  }
}
