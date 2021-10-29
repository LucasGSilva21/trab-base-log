import { DeleteProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'
import { UUIDValidator } from '../../../../../utils/validators/protocols'
import { InvalidParamError, NotFoundError } from '../../../../../utils/errors'

export class PgDeleteProductRepository extends PgRepository implements DeleteProductRepository {
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

    const pgProductRepo = this.getRepository(PgProduct)

    const product = await pgProductRepo.findOne(id)

    if (!product) {
      throw new NotFoundError(id)
    }

    await pgProductRepo.delete(id)
  }
}
