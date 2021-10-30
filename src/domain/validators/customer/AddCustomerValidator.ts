import { Validator, Gender } from '../../protocols'
import { AddCustomerModel } from '../../repositories/customer'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'
import { EmailValidator } from '../../../utils/validators/protocols'

export class AddCustomerValidator implements Validator {
  private readonly emailValidator: EmailValidator

  constructor (
    emailValidator: EmailValidator
  ) {
    this.emailValidator = emailValidator
  }

  validate (addCustomerModel: AddCustomerModel): Error | undefined {
    const requiredFields = ['name', 'email', 'cpf', 'birthDate', 'gender', 'phone', 'address']

    for (const field of requiredFields) {
      if (addCustomerModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    if (isNaN(Date.parse(addCustomerModel.birthDate.toString()))) {
      throw new InvalidParamError(
        'birthDate',
        'invalid birth date'
      )
    }

    if (!(addCustomerModel.gender in Gender)) {
      throw new InvalidParamError(
        'gender',
        'invalid gender value'
      )
    }

    if (!this.emailValidator.isValid(addCustomerModel.email)) {
      throw new InvalidParamError(
        'email',
        'invalid email'
      )
    }

    return undefined
  }
}
