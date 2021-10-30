import { CustomerModel } from '../../models/Customer'
import { Gender } from '../../protocols'

export interface UpdateCustomerModel {
  name?: string
  email?: string
  cpf?: string
  birthDate?: Date
  gender?: Gender
  phone?: string
  address?: string
}

export interface UpdateCustomerRepository {
  update (id: string, updateCustomerModel: UpdateCustomerModel): Promise<CustomerModel>
}
