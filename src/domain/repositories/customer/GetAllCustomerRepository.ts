import { CustomerModel } from '../../models/Customer'

export interface GetAllCustomerRepository {
  getAll (): Promise<CustomerModel[]>
}
