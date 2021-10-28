import { GetOneProductRepository } from '../../repositories/product'
import { ProductModel } from '../../models/Product'
import { GetOneProductValidator } from '../../validators/product'

export class GetOneProduct {
  private readonly getOneProductRepository: GetOneProductRepository
  private readonly getOneProductValidator: GetOneProductValidator

  constructor (
    getOneProductRepository: GetOneProductRepository,
    getOneProductValidator: GetOneProductValidator
  ) {
    this.getOneProductRepository = getOneProductRepository
    this.getOneProductValidator = getOneProductValidator
  }

  async getOne (id: string): Promise<ProductModel> {
    const error = this.getOneProductValidator.validate(id)

    if (error) {
      throw error
    }

    const product = await this.getOneProductRepository.getOne(id)

    return product
  }
}
