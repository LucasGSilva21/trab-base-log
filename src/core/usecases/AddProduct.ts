import { AddProductModel, AddProductRepository } from '../repositories/AddProductRepository'
import { ProductModel } from '../models/Product'

export class AddProduct {
  private readonly addProductRepository: AddProductRepository

  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async add (addProductModel: AddProductModel): Promise<ProductModel> {
    const product = await this.addProductRepository.add(addProductModel)

    return product
  }
}
