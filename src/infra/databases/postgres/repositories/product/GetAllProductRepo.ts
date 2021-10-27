import { ProductModel } from '../../../../../domain/models/Product'
import { GetAllProductRepository } from '../../../../../domain/repositories/product'
import { PgRepository } from '../../helpers/repository'
import { PgProduct } from '../../entities'

export class PgGetAllProductRepository extends PgRepository implements GetAllProductRepository {
  async getAll (): Promise<ProductModel[]> {
    const pgProductRepo = this.getRepository(PgProduct)

    const products = await pgProductRepo.find()

    return products
  }
}
