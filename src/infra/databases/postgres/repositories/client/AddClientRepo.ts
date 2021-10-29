import { ClientModel } from '../../../../../domain/models/Client'
import { AddClientModel, AddClientRepository } from '../../../../../domain/repositories/client'
import { PgRepository } from '../../helpers/repository'
import { PgClient } from '../../entities'

export class PgAddClientRepository extends PgRepository implements AddClientRepository {
  async add (addClientModel: AddClientModel): Promise<ClientModel> {
    const pgClientRepo = this.getRepository(PgClient)

    const clientCreate = pgClientRepo.create(addClientModel)

    const client = await pgClientRepo.save(clientCreate)

    return client
  }
}
