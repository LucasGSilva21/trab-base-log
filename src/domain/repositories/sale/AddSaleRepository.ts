import { SaleModel } from '../../models/Sale'

export interface AddSaleModel {
  productId: string
  customerId: string
  saleDate: Date
  quantity: number
}

export interface AddSaleRepository {
  add (addSaleModel: AddSaleModel): Promise<SaleModel>
}
