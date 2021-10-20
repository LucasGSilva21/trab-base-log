import { AddProductModel, AddProductRepository } from '../repositories/AddProductRepository'
import { ProductModel } from '../models/Product'
import { InvalidParamError } from '../../utils/errors'

export class AddProduct {
  private readonly addProductRepository: AddProductRepository

  constructor (addProductRepository: AddProductRepository) {
    this.addProductRepository = addProductRepository
  }

  async add (addProductModel: AddProductModel): Promise<ProductModel> {
    if (addProductModel.quantity < 0) {
      throw new InvalidParamError('quantity')
    }

    if (addProductModel.purchasePrice > addProductModel.salePrice) {
      throw new InvalidParamError('purchasePrice')
    }

    const product = await this.addProductRepository.add(addProductModel)

    return product
  }
}
