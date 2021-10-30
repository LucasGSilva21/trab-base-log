import { AddSaleModel, AddSaleRepository } from '../../repositories/sale'
import { SaleModel } from '../../models/Sale'
import { AddSaleValidator } from '../../validators/sale'
import { GetOneProductRepository } from '../../repositories/product'

export class AddSale {
  private readonly addSaleRepository: AddSaleRepository
  private readonly addSaleValidator: AddSaleValidator
  private readonly getOneProductRepository: GetOneProductRepository

  constructor (
    addSaleRepository: AddSaleRepository,
    addSaleValidator: AddSaleValidator,
    getOneProductRepository: GetOneProductRepository
  ) {
    this.addSaleRepository = addSaleRepository
    this.addSaleValidator = addSaleValidator
    this.getOneProductRepository = getOneProductRepository
  }

  async add (addSaleModel: AddSaleModel): Promise<SaleModel> {
    const product = await this.getOneProductRepository.getOne(addSaleModel.productId)

    const error = this.addSaleValidator.validate(addSaleModel, product)

    if (error) {
      throw error
    }

    const sale = await this.addSaleRepository.add(addSaleModel)

    return sale
  }
}
