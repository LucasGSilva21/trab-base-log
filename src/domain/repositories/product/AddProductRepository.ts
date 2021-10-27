import { ProductModel } from '../../models/Product'

export interface AddProductModel {
  name: string
  description?: string
  purchasePrice: number
  salePrice: number
  quantity: number
}

export interface AddProductRepository {
  add(addProductModel: AddProductModel): Promise<ProductModel>
}
