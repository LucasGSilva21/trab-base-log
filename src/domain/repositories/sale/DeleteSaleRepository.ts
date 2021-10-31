export interface DeleteSaleRepository {
  delete (id: string): Promise<void>
}
