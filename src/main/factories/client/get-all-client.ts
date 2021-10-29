import { GetAllClientController } from '../../../presentation/controllers/client'
import { Controller } from '../../../presentation/protocols'
import { GetAllClient } from '../../../domain/usecases/client'
import { PgGetAllClientRepository } from '../../../infra/databases/postgres/repositories/client'

export const makeGetAllClientController = (): Controller => {
  const pgGetAllClientRepository = new PgGetAllClientRepository()
  const getAllClient = new GetAllClient(pgGetAllClientRepository)
  return new GetAllClientController(getAllClient)
}
