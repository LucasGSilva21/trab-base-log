import { SaleModel } from '../../../../../domain/models/Sale'
import { GetAllSaleRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { PgSale } from '../../entities'

export class PgGetAllSaleRepository extends PgRepository implements GetAllSaleRepository {
  async getAll (): Promise<SaleModel[]> {
    const pgSaleRepo = this.getRepository(PgSale)

    const sales = await pgSaleRepo.find({
      relations: ['product', 'customer']
    })

    return sales
  }
}
