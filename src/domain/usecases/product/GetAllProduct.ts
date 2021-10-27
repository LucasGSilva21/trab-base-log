import { GetAllProductRepository } from '../../repositories/product'
import { ProductModel } from '../../models/Product'

export class GetAllProduct {
  private readonly getAllProductRepository: GetAllProductRepository

  constructor (getAllProductRepository: GetAllProductRepository) {
    this.getAllProductRepository = getAllProductRepository
  }

  async getAll (): Promise<ProductModel[]> {
    const products = await this.getAllProductRepository.getAll()

    return products
  }
}
