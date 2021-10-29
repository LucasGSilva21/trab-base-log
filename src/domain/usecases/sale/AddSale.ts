import { AddSaleModel, AddSaleRepository } from '../../repositories/sale'
import { SaleModel } from '../../models/Sale'
import { AddSaleValidator } from '../../validators/sale'

export class AddSale {
  private readonly addSaleRepository: AddSaleRepository
  private readonly addSaleValidator: AddSaleValidator

  constructor (
    addSaleRepository: AddSaleRepository,
    addSaleValidator: AddSaleValidator
  ) {
    this.addSaleRepository = addSaleRepository
    this.addSaleValidator = addSaleValidator
  }

  async add (addSaleModel: AddSaleModel): Promise<SaleModel> {
    const error = this.addSaleValidator.validate(addSaleModel)

    if (error) {
      throw error
    }

    const sale = await this.addSaleRepository.add(addSaleModel)

    return sale
  }
}
