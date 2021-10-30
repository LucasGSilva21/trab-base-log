import { SaleModel } from '../../models/Sale'

export interface GetAllSaleRepository {
  getAll (): Promise<SaleModel[]>
}
