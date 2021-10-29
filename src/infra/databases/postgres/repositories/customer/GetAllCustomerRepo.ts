import { CustomerModel } from '../../../../../domain/models/Customer'
import { GetAllCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'

export class PgGetAllCustomerRepository extends PgRepository implements GetAllCustomerRepository {
  async getAll (): Promise<CustomerModel[]> {
    const pgCustomerRepo = this.getRepository(PgCustomer)

    const customers = await pgCustomerRepo.find()

    return customers
  }
}
