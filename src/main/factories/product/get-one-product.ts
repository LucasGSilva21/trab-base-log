import { GetOneProductController } from '../../../presentation/controllers/product'
import { Controller } from '../../../presentation/protocols'
import { GetOneProduct } from '../../../domain/usecases/product'
import { PgGetOneProductRepository } from '../../../infra/databases/postgres/repositories/product'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeGetOneProductController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgGetOneProductRepository = new PgGetOneProductRepository(uUIDValidatorAdapter)
  const getOneProduct = new GetOneProduct(pgGetOneProductRepository)
  return new GetOneProductController(getOneProduct)
}
