import { ProductModel } from '../../../../core/models/Product'
import { AddProductModel, AddProductRepository } from '../../../../core/repositories/AddProductRepository'
import { PgRepository } from '../helpers/repository'
import { PgProduct } from '../entities'

export class PgAddProductRepository extends PgRepository implements AddProductRepository {
  async add (addProductModel: AddProductModel): Promise<ProductModel> {
    const pgProductRepo = this.getRepository(PgProduct)

    const productCreate = pgProductRepo.create(addProductModel)

    const product = await pgProductRepo.save(productCreate)

    return product
  }
}
