import { CustomerModel } from '../../models/Customer'

export interface GetOneCustomerRepository {
  getOne (id: string): Promise<CustomerModel | undefined>
}
