import { GetAllCustomerRepository } from '../../repositories/customer'
import { CustomerModel } from '../../models/Customer'

export class GetAllCustomer {
  private readonly getAllCustomerRepository: GetAllCustomerRepository

  constructor (getAllCustomerRepository: GetAllCustomerRepository) {
    this.getAllCustomerRepository = getAllCustomerRepository
  }

  async getAll (): Promise<CustomerModel[]> {
    const customers = await this.getAllCustomerRepository.getAll()

    return customers
  }
}
