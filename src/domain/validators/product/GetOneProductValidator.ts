import { Validator } from '../../protocols'
import { UUIDValidator } from '../../../utils/validators/protocols'
import { InvalidParamError } from '../../../utils/errors'

export class GetOneProductValidator implements Validator {
  private readonly UUIDValidator: UUIDValidator

  constructor (
    UUIDValidator: UUIDValidator
  ) {
    this.UUIDValidator = UUIDValidator
  }

  validate (uuid: string): Error | undefined {
    if (!this.UUIDValidator.isValid(uuid)) {
      throw new InvalidParamError(
        'id',
        'Id must be a valid uuid'
      )
    }

    return undefined
  }
}
