import { Validator } from '../../protocols'
import { AddClientModel } from '../../repositories/client'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'
import { EmailValidator } from '../../../utils/validators/protocols'

export class AddClientValidator implements Validator {
  private readonly emailValidator: EmailValidator

  constructor (
    emailValidator: EmailValidator
  ) {
    this.emailValidator = emailValidator
  }

  validate (addClientModel: AddClientModel): Error | undefined {
    const requiredFields = ['name', 'email', 'cpf', 'birthDate', 'gender', 'phone', 'address']

    for (const field of requiredFields) {
      if (addClientModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    if (!this.emailValidator.isValid(addClientModel.email)) {
      throw new InvalidParamError(
        'email',
        'invalid email'
      )
    }

    return undefined
  }
}
