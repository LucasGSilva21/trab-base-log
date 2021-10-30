import { Validator, Gender } from '../../protocols'
import { UpdateCustomerModel } from '../../repositories/customer'
import { InvalidParamError } from '../../../utils/errors'
import { EmailValidator } from '../../../utils/validators/protocols'

export class UpdateCustomerValidator implements Validator {
  private readonly emailValidator: EmailValidator

  constructor (
    emailValidator: EmailValidator
  ) {
    this.emailValidator = emailValidator
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

    return undefined
  }
}
