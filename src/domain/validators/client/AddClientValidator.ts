import { Validator } from '../../protocols'
import { AddClientModel } from '../../repositories/client'
import { MissingParamError } from '../../../utils/errors'

export class AddClientValidator implements Validator {
  validate (addClientModel: AddClientModel): Error | undefined {
    const requiredFields = ['name', 'email', 'cpf', 'birthDate', 'gender', 'phone', 'address']

    for (const field of requiredFields) {
      if (addClientModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    return undefined
  }
}
