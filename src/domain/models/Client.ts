import { Gender } from '../protocols'

export class ClientModel {
  id: string
  name: string
  email: string
  cpf: string
  birthDate: Date
  gender: Gender
  phone: string
  address: string
}
