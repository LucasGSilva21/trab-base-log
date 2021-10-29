import { Controller } from '../../../presentation/protocols'
import { DeleteProductController } from '../../../presentation/controllers/product'
import { DeleteProduct } from '../../../domain/usecases/product'
import { PgDeleteProductRepository } from '../../../infra/databases/postgres/repositories/product'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeDeleteProductController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgDeleteProductRepository = new PgDeleteProductRepository(uUIDValidatorAdapter)
  const deleteProduct = new DeleteProduct(pgDeleteProductRepository)
  return new DeleteProductController(deleteProduct)
}
