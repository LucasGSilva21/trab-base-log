import { SaleModel } from '../../models/Sale'

export interface GetOneSaleRepository {
  getOne (id: string): Promise<SaleModel>
}
