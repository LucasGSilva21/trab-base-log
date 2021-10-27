import { AddProductController } from '../../../presentation/controllers/product'
import { Controller } from '../../../presentation/protocols'
import { AddProduct } from '../../../domain/usecases/product'
import { AddProductValidator } from '../../../domain/validators/product'
import { PgAddProductRepository } from '../../../infra/databases/postgres/repositories/product'

export const makeAddProductController = (): Controller => {
  const addProductRepository = new PgAddProductRepository()
  const addProductValidator = new AddProductValidator()
  const addProduct = new AddProduct(addProductRepository, addProductValidator)
  return new AddProductController(addProduct)
}
