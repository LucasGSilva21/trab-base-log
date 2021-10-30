import { ProductModel } from '../../../../../domain/models/Product'
import { UpdateProductModel, UpdateProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError } from '../../../../../utils/errors'

export class PgUpdateProductRepository extends PgRepository implements UpdateProductRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async update (id: string, updateProductModel: UpdateProductModel): Promise<ProductModel> {
    if (!this.uUIDValidator.isValid(id)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    const pgProductRepo = this.getRepository(PgProduct)

    const productUpdate = await pgProductRepo.update({ id }, { ...updateProductModel })

    const product = productUpdate.raw[0]

    return product
  }
}
