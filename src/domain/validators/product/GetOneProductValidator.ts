import { Validator } from '../../protocols'
import { UUIDValidator } from '../../../utils/validators/protocols'
import { InvalidParamError } from '../../../utils/errors'

export class GetOneProductValidator implements Validator {
  private readonly uUIDValidator: UUIDValidator

  constructor (
    uUIDValidator: UUIDValidator
  ) {
    this.uUIDValidator = uUIDValidator
  }

  validate (uuid: string): Error | undefined {
    if (!this.uUIDValidator.isValid(uuid)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    return undefined
  }
}
