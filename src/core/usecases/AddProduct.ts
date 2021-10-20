import { AddProductModel, AddProductRepository } from '../repositories/AddProductRepository'
import { ProductModel } from '../models/Product'
import { AddProductValidator } from '../validators/AddProductValidator'

export class AddProduct {
  private readonly addProductRepository: AddProductRepository
  private readonly addProductValidator: AddProductValidator

  constructor (
    addProductRepository: AddProductRepository,
    addProductValidator: AddProductValidator
  ) {
    this.addProductRepository = addProductRepository
    this.addProductValidator = addProductValidator
  }

  async add (addProductModel: AddProductModel): Promise<ProductModel> {
    const error = this.addProductValidator.validate(addProductModel)

    if (error) {
      throw error
    }

    const product = await this.addProductRepository.add(addProductModel)

    return product
  }
}
