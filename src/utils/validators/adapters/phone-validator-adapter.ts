import { PhoneValidator } from '../protocols'

import validator from 'validator'

export class PhoneValidatorAdapter implements PhoneValidator {
  isValid (phone: string): boolean {
    return validator.isMobilePhone(phone, 'pt-BR')
  }
}
