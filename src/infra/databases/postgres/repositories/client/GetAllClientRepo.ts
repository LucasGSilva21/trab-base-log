import { ClientModel } from '../../../../../domain/models/Client'
import { GetAllClientRepository } from '../../../../../domain/repositories/client'
import { PgRepository } from '../../helpers/repository'
import { PgClient } from '../../entities'

export class PgGetAllClientRepository extends PgRepository implements GetAllClientRepository {
  async getAll (): Promise<ClientModel[]> {
    const pgClientRepo = this.getRepository(PgClient)

    const clients = await pgClientRepo.find()

    return clients
  }
}
