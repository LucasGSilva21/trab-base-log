import { AddProductModel, AddProductRepository } from '../repositories/AddProductRepository'

export class AddProduct {
  private readonly addProductRepository: AddProductRepository

  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async add (addProductModel: AddProductModel) {
    const product = await this.addProductRepository.add(addProductModel)

    return product
  }
}
