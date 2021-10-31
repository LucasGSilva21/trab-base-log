import { Validator, Gender } from '../../protocols'
import { UpdateCustomerModel } from '../../repositories/customer'
import { InvalidParamError } from '../../../utils/errors'
import { EmailValidator, PhoneValidator, CpfValidator } from '../../../utils/validators/protocols'

export class UpdateCustomerValidator implements Validator {
  private readonly emailValidator: EmailValidator
  private readonly phoneValidator: PhoneValidator
  private readonly cpfValidator: CpfValidator

  constructor (
    emailValidator: EmailValidator,
    phoneValidator: PhoneValidator,
    cpfValidator: CpfValidator
  ) {
    this.emailValidator = emailValidator
    this.phoneValidator = phoneValidator
    this.cpfValidator = cpfValidator
  }

  validate (updateCustomerModel: UpdateCustomerModel): Error | undefined {
    if (
      updateCustomerModel.birthDate &&
      isNaN(Date.parse(updateCustomerModel.birthDate.toString()))
    ) {
      throw new InvalidParamError(
        'birthDate',
        'invalid birth date'
      )
    }

    if (
      updateCustomerModel.gender &&
      !(updateCustomerModel.gender in Gender)
    ) {
      throw new InvalidParamError(
        'gender',
        'invalid gender value'
      )
    }

    if (
      updateCustomerModel.email &&
      !this.emailValidator.isValid(updateCustomerModel.email)
    ) {
      throw new InvalidParamError(
        'email',
        'invalid email'
      )
    }

    if (
      updateCustomerModel.phone &&
      !this.phoneValidator.isValid(updateCustomerModel.phone)
    ) {
      throw new InvalidParamError(
        'phone',
        'invalid phone'
      )
    }

    if (
      updateCustomerModel.cpf &&
      !this.cpfValidator.isValid(updateCustomerModel.cpf)
    ) {
      throw new InvalidParamError(
        'cpf',
        'invalid cpf'
      )
    }

    return undefined
  }
}
