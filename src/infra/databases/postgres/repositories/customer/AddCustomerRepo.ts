import { CustomerModel } from '../../../../../domain/models/Customer'
import { AddCustomerModel, AddCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'
import { InvalidParamError } from '../../../../../utils/errors'

export class PgAddCustomerRepository extends PgRepository implements AddCustomerRepository {
  async add (addCustomerModel: AddCustomerModel): Promise<CustomerModel> {
    const pgCustomerRepo = this.getRepository(PgCustomer)

    const validateEmail = await pgCustomerRepo.findOne({
      email: addCustomerModel.email
    })

    if (validateEmail) {
      throw new InvalidParamError(
        'email',
        'This email already exists'
      )
    }

    const validateCpf = await pgCustomerRepo.findOne({
      cpf: addCustomerModel.cpf
    })

    if (validateCpf) {
      throw new InvalidParamError(
        'cpf',
        'This cpf already exists'
      )
    }

    const validatePhone = await pgCustomerRepo.findOne({
      phone: addCustomerModel.phone
    })

    if (validatePhone) {
      throw new InvalidParamError(
        'phone',
        'This phone already exists'
      )
    }

    const customerCreate = pgCustomerRepo.create(addCustomerModel)

    const customer = await pgCustomerRepo.save(customerCreate)

    return customer
  }
}
