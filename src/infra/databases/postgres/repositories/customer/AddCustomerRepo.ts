import { CustomerModel } from '../../../../../domain/models/Customer'
import { AddCustomerModel, AddCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'

export class PgAddCustomerRepository extends PgRepository implements AddCustomerRepository {
  async add (addCustomerModel: AddCustomerModel): Promise<CustomerModel> {
    const pgCustomerRepo = this.getRepository(PgCustomer)

    const customerCreate = pgCustomerRepo.create(addCustomerModel)

    const customer = await pgCustomerRepo.save(customerCreate)

    return customer
  }
}
