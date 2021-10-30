import { DeleteCustomerRepository } from '../../repositories/customer'

export class DeleteCustomer {
  private readonly deleteCustomerRepository: DeleteCustomerRepository

  constructor (deleteCustomerRepository: DeleteCustomerRepository) {
    this.deleteCustomerRepository = deleteCustomerRepository
  }

  async delete (id: string): Promise<void> {
    await this.deleteCustomerRepository.delete(id)
  }
}
