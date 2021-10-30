import { GetAllSaleRepository } from '../../repositories/sale'
import { SaleModel } from '../../models/Sale'

export class GetAllSale {
  private readonly getAllSaleRepository: GetAllSaleRepository

  constructor (getAllSaleRepository: GetAllSaleRepository) {
    this.getAllSaleRepository = getAllSaleRepository
  }

  async getAll (): Promise<SaleModel[]> {
    const sales = await this.getAllSaleRepository.getAll()

    return sales
  }
}
