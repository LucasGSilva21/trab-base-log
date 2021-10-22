import { ProductModel } from '../../../../core/models/Product'
import { GetAllProductRepository } from '../../../../core/repositories/GetAllProductRepository'
import { PgRepository } from '../helpers/repository'
import { PgProduct } from '../entities'

export class PgGetAllProductRepository extends PgRepository implements GetAllProductRepository {
  async getAll (): Promise<ProductModel[]> {
    const pgProductRepo = this.getRepository(PgProduct)

    const products = await pgProductRepo.find()

    return products
  }
}
