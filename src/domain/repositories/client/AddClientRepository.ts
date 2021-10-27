import { ClientModel } from '../../models/Client'
import { Gender } from '../../protocols'

export interface AddClientModel {
  name: string
  email: string
  cpf: string
  birthDate: Date
  gender: Gender
  phone: string
  address: string
}

export interface AddClientRepository {
  add(addClientModel: AddClientModel): Promise<ClientModel>
}
