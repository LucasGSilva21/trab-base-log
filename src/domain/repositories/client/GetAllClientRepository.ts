import { ClientModel } from '../../models/Client'

export interface GetAllClientRepository {
  getAll(): Promise<ClientModel[]>
}
