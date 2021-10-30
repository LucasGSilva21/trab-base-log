import { SaleModel } from '../../../../../domain/models/Sale'
import { AddSaleModel, AddSaleRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { PgSale, PgProduct } from '../../entities'
import { NotFoundError } from '../../../../../utils/errors'

export class PgAddSaleRepository extends PgRepository implements AddSaleRepository {
  async add (addSaleModel: AddSaleModel): Promise<SaleModel> {
    const pgSaleRepo = this.getRepository(PgSale)

    const pgProductRepo = this.getRepository(PgProduct)

    const product = await pgProductRepo.findOne(addSaleModel.productId)

    if (!product) {
      throw new NotFoundError(addSaleModel.productId)
    }

    // add transaction
    await pgProductRepo.update(
      { id: addSaleModel.productId },
      { quantity: product.quantity - addSaleModel.quantity }
    )

    const saleCreate = pgSaleRepo.create(addSaleModel)

    const sale = await pgSaleRepo.save(saleCreate)

    return sale
  }
}
