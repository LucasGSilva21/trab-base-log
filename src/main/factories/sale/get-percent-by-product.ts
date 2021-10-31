import { GetPercentByProductController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { GetPercentByProduct } from '../../../domain/usecases/sale'
import { PgGetPercentByProductRepository } from '../../../infra/databases/postgres/repositories/sale'

export const makeGetPercentByProductController = (): Controller => {
  const pgGetPercentByProductRepository = new PgGetPercentByProductRepository()
  const getPercentByProduct = new GetPercentByProduct(pgGetPercentByProductRepository)
  return new GetPercentByProductController(getPercentByProduct)
}
