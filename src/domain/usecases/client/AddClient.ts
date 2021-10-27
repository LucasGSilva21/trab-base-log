import { ClientModel } from '../../models/Client'
import { AddClientModel, AddClientRepository } from '../../repositories/client'
import { AddClientValidator } from '../../validators/client'

export class AddClient {
  private readonly addClientRepository: AddClientRepository
  private readonly addClientValidator: AddClientValidator

  constructor (
    addClientRepository: AddClientRepository,
    addClientValidator: AddClientValidator
  ) {
    this.addClientRepository = addClientRepository
    this.addClientValidator = addClientValidator
  }

  async add (addClientModel: AddClientModel): Promise<ClientModel> {
    const error = this.addClientValidator.validate(addClientModel)

    if (error) {
      throw error
    }

    const client = this.addClientRepository.add(addClientModel)

    return client
  }
}
