import { GetAllProductController } from '../../../presentation/controllers/product'
import { Controller } from '../../../presentation/protocols'
import { GetAllProduct } from '../../../domain/usecases/product'
import { PgGetAllProductRepository } from '../../../infra/databases/postgres/repositories/product'

export const makeGetAllProductController = (): Controller => {
  const getAllProductRepository = new PgGetAllProductRepository()
  const getAllProduct = new GetAllProduct(getAllProductRepository)
  return new GetAllProductController(getAllProduct)
}
