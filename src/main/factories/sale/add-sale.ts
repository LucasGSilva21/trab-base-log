import { AddSaleController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { AddSale } from '../../../domain/usecases/sale'
import { AddSaleValidator } from '../../../domain/validators/sale'
import { PgAddSaleRepository } from '../../../infra/databases/postgres/repositories/sale'

export const makeAddSaleController = (): Controller => {
  const pgAddSaleRepository = new PgAddSaleRepository()
  const addSaleValidator = new AddSaleValidator()
  const addSale = new AddSale(pgAddSaleRepository, addSaleValidator)
  return new AddSaleController(addSale)
}
