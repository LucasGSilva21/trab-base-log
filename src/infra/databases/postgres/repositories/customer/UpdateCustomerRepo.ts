import { CustomerModel } from '../../../../../domain/models/Customer'
import { UpdateCustomerModel, UpdateCustomerRepository } from '../../../../../domain/repositories/customer'
import { PgRepository } from '../../helpers/repository'
import { PgCustomer } from '../../entities'
import { InvalidParamError } from '../../../../../utils/errors'
import { Not } from 'typeorm'
import { UUIDValidator } from '../../../../../utils/validators/protocols'

export class PgUpdateCustomerRepository extends PgRepository implements UpdateCustomerRepository {
  private readonly uUIDValidator: UUIDValidator

  constructor (uUIDValidator: UUIDValidator) {
    super()
    this.uUIDValidator = uUIDValidator
  }

  async update (id: string, updateCustomerModel: UpdateCustomerModel): Promise<CustomerModel> {
    if (!this.uUIDValidator.isValid(id)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    const pgCustomerRepo = this.getRepository(PgCustomer)

    if (updateCustomerModel.email) {
      const validateEmail = await pgCustomerRepo.findOne({
        id: Not(id),
        email: updateCustomerModel.email
      })

      if (validateEmail) {
        throw new InvalidParamError(
          'email',
          'This email already exists'
        )
      }
    }

    if (updateCustomerModel.cpf) {
      const validateCpf = await pgCustomerRepo.findOne({
        id: Not(id),
        cpf: updateCustomerModel.cpf
      })

      if (validateCpf) {
        throw new InvalidParamError(
          'cpf',
          'This cpf already exists'
        )
      }
    }

    if (updateCustomerModel.phone) {
      const validatePhone = await pgCustomerRepo.findOne({
        id: Not(id),
        phone: updateCustomerModel.phone
      })

      if (validatePhone) {
        throw new InvalidParamError(
          'phone',
          'This phone already exists'
        )
      }
    }

    const customerUpdate = await pgCustomerRepo.update({ id }, { ...updateCustomerModel })

    const customer = customerUpdate.raw[0]

    return customer
  }
}
