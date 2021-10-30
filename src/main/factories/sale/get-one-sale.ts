import { GetOneSaleController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { GetOneSale } from '../../../domain/usecases/sale'
import { PgGetOneSaleRepository } from '../../../infra/databases/postgres/repositories/sale'
import { UUIDValidatorAdapter } from '../../../utils/validators/adapters'

export const makeGetOneSaleController = (): Controller => {
  const uUIDValidatorAdapter = new UUIDValidatorAdapter()
  const pgGetOneSaleRepository = new PgGetOneSaleRepository(uUIDValidatorAdapter)
  const getOneSale = new GetOneSale(pgGetOneSaleRepository)
  return new GetOneSaleController(getOneSale)
}
