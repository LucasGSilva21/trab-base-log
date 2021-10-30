import { GetOneProductRepository } from '../../repositories/product'
import { ProductModel } from '../../models/Product'

export class GetOneProduct {
  private readonly getOneProductRepository: GetOneProductRepository

  constructor (getOneProductRepository: GetOneProductRepository) {
    this.getOneProductRepository = getOneProductRepository
  }

  async getOne (id: string): Promise<ProductModel> {
    const product = await this.getOneProductRepository.getOne(id)

    return product
  }
}
