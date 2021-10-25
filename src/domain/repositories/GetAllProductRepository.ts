import { ProductModel } from '../models/Product'

export interface GetAllProductRepository {
  getAll(): Promise<ProductModel[]>
}
