import { ProductModel } from '../../../../../domain/models/Product'
import { UpdateProductModel, UpdateProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'

export class PgUpdateProductRepository extends PgRepository implements UpdateProductRepository {
  async update (id: string, updateProductModel: UpdateProductModel): Promise<ProductModel> {
    const pgProductRepo = this.getRepository(PgProduct)

    const productUpdate = await pgProductRepo.update({ id }, { ...updateProductModel })

    const product = productUpdate.raw[0]

    return product
  }
}
