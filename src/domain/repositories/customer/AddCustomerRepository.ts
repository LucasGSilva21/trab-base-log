import { CustomerModel } from '../../models/Customer'
import { Gender } from '../../protocols'

export interface AddCustomerModel {
  name: string
  email: string
  cpf: string
  birthDate: Date
  gender: Gender
  phone: string
  address: string
}

export interface AddCustomerRepository {
  add (addCustomerModel: AddCustomerModel): Promise<CustomerModel>
}
