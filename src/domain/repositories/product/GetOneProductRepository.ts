import { ProductModel } from '../../models/Product'

export interface GetOneProductRepository {
  getOne(id: string): Promise<ProductModel>
}
