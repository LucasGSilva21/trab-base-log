import { AddSaleController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { AddSale } from '../../../domain/usecases/sale'
import { AddSaleValidator } from '../../../domain/validators/sale'
import { PgAddSaleRepository } from '../../../infra/databases/postgres/repositories/sale'
import { PgGetOneProductRepository } from '../../../infra/databases/postgres/repositories/product'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeAddSaleController = (): Controller => {
  const pgAddSaleRepository = new PgAddSaleRepository()
  const addSaleValidator = new AddSaleValidator()
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgGetOneProductRepository = new PgGetOneProductRepository(uUIDValidatorAdapter)
  const addSale = new AddSale(pgAddSaleRepository, addSaleValidator, pgGetOneProductRepository)
  return new AddSaleController(addSale)
}
