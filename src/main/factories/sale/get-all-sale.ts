import { GetAllSaleController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { GetAllSale } from '../../../domain/usecases/sale'
import { PgGetAllSaleRepository } from '../../../infra/databases/postgres/repositories/sale'

export const makeGetAllSaleController = (): Controller => {
  const pgGetAllSaleRepository = new PgGetAllSaleRepository()
  const getAllSale = new GetAllSale(pgGetAllSaleRepository)
  return new GetAllSaleController(getAllSale)
}
