import { AddProductModel, AddProductRepository } from '../repository/AddProductRepository'

export class AddProduct {
  private readonly addProductRepository: AddProductRepository

  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async execute (addProductModel: AddProductModel) {
    const product = await this.addProductRepository.add(addProductModel)

    return product
  }
}
