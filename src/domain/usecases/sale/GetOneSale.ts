import { GetOneSaleRepository } from '../../repositories/sale'
import { SaleModel } from '../../models/Sale'

export class GetOneSale {
  private readonly getOneSaleRepository: GetOneSaleRepository

  constructor (getOneSaleRepository: GetOneSaleRepository) {
    this.getOneSaleRepository = getOneSaleRepository
  }

  async getOne (id: string): Promise<SaleModel> {
    const sale = await this.getOneSaleRepository.getOne(id)

    return sale
  }
}
