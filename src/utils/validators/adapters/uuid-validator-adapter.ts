import { UUIDValidator } from '../protocols'

import validator from 'validator'

export class UUIDValidatorAdapter implements UUIDValidator {
  isValid (uuid: string): boolean {
    return validator.isUUID(uuid)
  }
}
