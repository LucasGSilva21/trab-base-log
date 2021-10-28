import { ProductModel } from '../../../../../domain/models/Product'
import { GetOneProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'

export class PgGetOneProductRepository extends PgRepository implements GetOneProductRepository {
  async getOne (id: string): Promise<ProductModel | undefined> {
    const pgProductRepo = this.getRepository(PgProduct)

    const product = await pgProductRepo.findOne(id)

    return product
  }
}
