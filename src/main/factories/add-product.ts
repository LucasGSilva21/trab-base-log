import { AddProductController } from '../../presentation/controllers/AddProduct'
import { Controller } from '../../presentation/protocols'
import { AddProduct } from '../../domain/usecases/AddProduct'
import { AddProductValidator } from '../../domain/validators/AddProductValidator'
import { PgAddProductRepository } from '../../infra/databases/postgres/repositories/AddPoductRepo'

export const makeAddProductController = (): Controller => {
  const addProductRepository = new PgAddProductRepository()
  const addProductValidator = new AddProductValidator()
  const addProduct = new AddProduct(addProductRepository, addProductValidator)
  return new AddProductController(addProduct)
}
