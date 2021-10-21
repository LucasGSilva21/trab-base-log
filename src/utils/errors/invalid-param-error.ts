export class InvalidParamError extends Error {
  constructor (paramName: string, message: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
    this.message = message
  }
}
