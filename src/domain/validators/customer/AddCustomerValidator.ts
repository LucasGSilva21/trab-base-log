import { Validator } from '../../protocols'
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

    if (!this.emailValidator.isValid(addCustomerModel.email)) {
      throw new InvalidParamError(
        'email',
        'invalid email'
      )
    }

    return undefined
  }
}
