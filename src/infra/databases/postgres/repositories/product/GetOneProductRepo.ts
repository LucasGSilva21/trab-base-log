import { ProductModel } from '../../../../../domain/models/Product'
import { GetOneProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgGetOneProductRepository extends PgRepository implements GetOneProductRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async getOne (id: string): Promise<ProductModel> {
    if (!this.uUIDValidator.isValid(id)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    const pgProductRepo = this.getRepository(PgProduct)

    const product = await pgProductRepo.findOne(id)

    if (!product) {
      throw new NotFoundError(id)
    }

    return product
  }
}
