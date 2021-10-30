import { UpdateProductModel, UpdateProductRepository, GetOneProductRepository } from '../../repositories/product'
import { ProductModel } from '../../models/Product'
import { UpdateProductValidator } from '../../validators/product'

export class UpdateProduct {
  private readonly updateProductRepository: UpdateProductRepository
  private readonly getOneProductRepository: GetOneProductRepository
  private readonly updateProductValidator: UpdateProductValidator

  constructor (
    updateProductRepository: UpdateProductRepository,
    getOneProductRepository: GetOneProductRepository,
    updateProductValidator: UpdateProductValidator
  ) {
    this.updateProductRepository = updateProductRepository
    this.getOneProductRepository = getOneProductRepository
    this.updateProductValidator = updateProductValidator
  }

  async update (id: string, updateProductModel: UpdateProductModel): Promise<ProductModel> {
    const product = await this.getOneProductRepository.getOne(id)

    const error = this.updateProductValidator.validate(updateProductModel, product)

    if (error) {
      throw error
    }

    const productUpdate = await this.updateProductRepository.update(id, updateProductModel)

    return productUpdate
  }
}
