import { CpfValidator } from '../protocols'

export class CpfValidatorAdapter implements CpfValidator {
  isValid (cpf: string): boolean {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return regex.test(cpf)
  }
}
