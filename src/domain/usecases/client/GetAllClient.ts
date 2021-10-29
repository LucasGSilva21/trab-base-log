import { GetAllClientRepository } from '../../repositories/client'
import { ClientModel } from '../../models/Client'

export class GetAllClient {
  private readonly getAllClientRepository: GetAllClientRepository

  constructor (getAllClientRepository: GetAllClientRepository) {
    this.getAllClientRepository = getAllClientRepository
  }

  async getAll (): Promise<ClientModel[]> {
    const clients = await this.getAllClientRepository.getAll()

    return clients
  }
}
