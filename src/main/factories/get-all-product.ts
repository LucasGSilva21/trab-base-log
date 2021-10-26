import { GetAllProductController } from '../../presentation/controllers/GetAllProduct'
import { Controller } from '../../presentation/protocols'
import { GetAllProduct } from '../../domain/usecases/GetAllProduct'
import { PgGetAllProductRepository } from '../../infra/databases/postgres/repositories/GetAllProductRepo'

export const makeGetAllProductController = (): Controller => {
  const getAllProductRepository = new PgGetAllProductRepository()
  const getAllProduct = new GetAllProduct(getAllProductRepository)
  return new GetAllProductController(getAllProduct)
}
