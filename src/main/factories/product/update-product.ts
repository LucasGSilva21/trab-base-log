import { UpdateProductController } from '../../../presentation/controllers/product'
import { Controller } from '../../../presentation/protocols'
import { UpdateProduct } from '../../../domain/usecases/product'
import { UpdateProductValidator } from '../../../domain/validators/product'
import { PgUpdateProductRepository, PgGetOneProductRepository } from '../../../infra/databases/postgres/repositories/product'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeUpdateProductController = (): Controller => {
  const pgUpdateProductRepository = new PgUpdateProductRepository()
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgGetOneProductRepository = new PgGetOneProductRepository(uUIDValidatorAdapter)
  const updateProductValidator = new UpdateProductValidator()
  const updateProduct = new UpdateProduct(pgUpdateProductRepository, pgGetOneProductRepository, updateProductValidator)
  return new UpdateProductController(updateProduct)
}
