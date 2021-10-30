import { UpdateCustomerModel, UpdateCustomerRepository } from '../../repositories/customer'
import { CustomerModel } from '../../models/Customer'
import { UpdateCustomerValidator } from '../../validators/customer'

export class UpdateCustomer {
  private readonly updateCustomerRepository: UpdateCustomerRepository
  private readonly updateCustomerValidator: UpdateCustomerValidator

  constructor (
    updateCustomerRepository: UpdateCustomerRepository,
    updateCustomerValidator: UpdateCustomerValidator
  ) {
    this.updateCustomerRepository = updateCustomerRepository
    this.updateCustomerValidator = updateCustomerValidator
  }

  async update (id: string, updateCustomerModel: UpdateCustomerModel): Promise<CustomerModel> {
    const error = this.updateCustomerValidator.validate(updateCustomerModel)

    if (error) {
      throw error
    }

    const customerUpdate = await this.updateCustomerRepository.update(id, updateCustomerModel)

    return customerUpdate
  }
}
