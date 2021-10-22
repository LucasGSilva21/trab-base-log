import { GetAllProductController } from '../../application/controllers/GetAllProduct'
import { Controller } from '../../application/protocols'
import { GetAllProduct } from '../../core/usecases/GetAllProduct'
import { PgGetAllProductRepository } from '../../infra/databases/postgres/repositories/GetAllProductRepo'

export const makeGetAllProductController = (): Controller => {
  const getAllProductRepository = new PgGetAllProductRepository()
  const getAllProduct = new GetAllProduct(getAllProductRepository)
  return new GetAllProductController(getAllProduct)
}
