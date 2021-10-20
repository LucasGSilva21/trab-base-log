import { AddProductController } from '../../application/controllers/AddProduct'
import { Controller } from '../../application/protocols'
import { AddProduct } from '../../core/usecases/AddProduct'
import { AddProductValidator } from '../../core/validators/AddProductValidator'
import { PgAddProductRepository } from '../../infra/databases/postgres/repositories/AddPoductRepo'

export const makeAddProductController = (): Controller => {
  const addProductRepository = new PgAddProductRepository()
  const addProductValidator = new AddProductValidator()
  const addProduct = new AddProduct(addProductRepository, addProductValidator)
  return new AddProductController(addProduct)
}
