import { SaleModel } from '../../../../../domain/models/Sale'
import { AddSaleModel, AddSaleRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { PgSale } from '../../entities'

export class PgAddSaleRepository extends PgRepository implements AddSaleRepository {
  async add (addSaleModel: AddSaleModel): Promise<SaleModel> {
    const pgSaleRepo = this.getRepository(PgSale)

    const saleCreate = pgSaleRepo.create(addSaleModel)

    const sale = await pgSaleRepo.save(saleCreate)

    return sale
  }
}
