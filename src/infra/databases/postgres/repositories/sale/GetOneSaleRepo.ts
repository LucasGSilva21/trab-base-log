import { SaleModel } from '../../../../../domain/models/Sale'
import { GetOneSaleRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { PgSale } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgGetOneSaleRepository extends PgRepository implements GetOneSaleRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async getOne (id: string): Promise<SaleModel> {
    if (!this.uUIDValidator.isValid(id)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    const pgSaleRepo = this.getRepository(PgSale)

    const sale = await pgSaleRepo.findOne(id, {
      relations: ['product', 'customer']
    })

    if (!sale) {
      throw new NotFoundError(id)
    }

    return sale
  }
}
