import { DeleteSaleRepository } from '../../repositories/sale'

export class DeleteSale {
  private readonly deleteSaleRepository: DeleteSaleRepository

  constructor (deleteSaleRepository: DeleteSaleRepository) {
    this.deleteSaleRepository = deleteSaleRepository
  }

  async delete (id: string): Promise<void> {
    await this.deleteSaleRepository.delete(id)
  }
}
