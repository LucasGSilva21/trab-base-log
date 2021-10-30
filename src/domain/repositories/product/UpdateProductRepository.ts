import { ProductModel } from '../../models/Product'

export interface UpdateProductModel {
  name?: string
  description?: string
  purchasePrice?: number
  salePrice?: number
  quantity?: number
}

export interface UpdateProductRepository {
  update (id: string, updateProductModel: UpdateProductModel): Promise<ProductModel>
}
