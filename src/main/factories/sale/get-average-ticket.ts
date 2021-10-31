import { GetAverageTicketController } from '../../../presentation/controllers/sale'
import { Controller } from '../../../presentation/protocols'
import { GetAverageTicket } from '../../../domain/usecases/sale'
import { PgGetAverageTicketRepository } from '../../../infra/databases/postgres/repositories/sale'

export const makeGetAverageTicketController = (): Controller => {
  const pgGetAverageTicketRepository = new PgGetAverageTicketRepository()
  const getAverageTicket = new GetAverageTicket(pgGetAverageTicketRepository)
  return new GetAverageTicketController(getAverageTicket)
}
