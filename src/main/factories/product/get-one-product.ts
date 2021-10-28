import { GetOneProductController } from '../../../presentation/controllers/product'
import { Controller } from '../../../presentation/protocols'
import { GetOneProduct } from '../../../domain/usecases/product'
import { PgGetOneProductRepository } from '../../../infra/databases/postgres/repositories/product'
import { GetOneProductValidator } from '../../../domain/validators/product'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeGetOneProductController = (): Controller => {
  const pgGetOneProductRepository = new PgGetOneProductRepository()
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const getOneProductValidator = new GetOneProductValidator(uUIDValidatorAdapter)
  const getOneProduct = new GetOneProduct(pgGetOneProductRepository, getOneProductValidator)
  return new GetOneProductController(getOneProduct)
}
