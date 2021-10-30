import { GetOneCustomerRepository } from '../../repositories/customer'
import { CustomerModel } from '../../models/Customer'

export class GetOneCustomer {
  private readonly getOneCustomerRepository: GetOneCustomerRepository

  constructor (getOneCustomerRepository: GetOneCustomerRepository) {
    this.getOneCustomerRepository = getOneCustomerRepository
  }

  async getOne (id: string): Promise<CustomerModel | undefined> {
    const customer = await this.getOneCustomerRepository.getOne(id)

    return customer
  }
}
