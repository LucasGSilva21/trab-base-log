import { AddProductController } from '../../application/controllers/AddProduct'
import { Controller } from '../../application/protocols'
import { AddProduct } from '../../core/usecases/AddProduct'
import { PgAddProductRepository } from '../../infra/databases/postgres/repositories/AddPoductRepo'

export const makeAddProductController = (): Controller => {
  const addProductRepository = new PgAddProductRepository()
  const addProduct = new AddProduct(addProductRepository)
  return new AddProductController(addProduct)
}
