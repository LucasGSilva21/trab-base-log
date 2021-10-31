import { Controller } from '../../../presentation/protocols'
import { DeleteSaleController } from '../../../presentation/controllers/sale'
import { DeleteSale } from '../../../domain/usecases/sale'
import { PgDeleteSaleRepository } from '../../../infra/databases/postgres/repositories/sale'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeDeleteSaleController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgDeleteSaleRepository = new PgDeleteSaleRepository(uUIDValidatorAdapter)
  const deleteSale = new DeleteSale(pgDeleteSaleRepository)
  return new DeleteSaleController(deleteSale)
}
