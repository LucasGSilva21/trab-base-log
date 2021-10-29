import { CustomerModel } from '../../models/Customer'
import { AddCustomerModel, AddCustomerRepository } from '../../repositories/customer'
import { AddCustomerValidator } from '../../validators/customer'

export class AddCustomer {
  private readonly addCustomerRepository: AddCustomerRepository
  private readonly addCustomerValidator: AddCustomerValidator

  constructor (
    addCustomerRepository: AddCustomerRepository,
    addCustomerValidator: AddCustomerValidator
  ) {
    this.addCustomerRepository = addCustomerRepository
    this.addCustomerValidator = addCustomerValidator
  }

  async add (addCustomerModel: AddCustomerModel): Promise<CustomerModel> {
    const error = this.addCustomerValidator.validate(addCustomerModel)

    if (error) {
      throw error
    }

    const customer = this.addCustomerRepository.add(addCustomerModel)

    return customer
  }
}
