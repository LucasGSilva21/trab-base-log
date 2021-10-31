import { GetPercentByProductRepository, ResultPercentProducts } from '../../repositories/sale'

export class GetPercentByProduct {
  private readonly getPercentByProductRepository: GetPercentByProductRepository

  constructor (getPercentByProductRepository: GetPercentByProductRepository) {
    this.getPercentByProductRepository = getPercentByProductRepository
  }

  async getPercentByProduct (): Promise<ResultPercentProducts[]> {
    const report = await this.getPercentByProductRepository.getPercentByProduct()

    return report
  }
}
