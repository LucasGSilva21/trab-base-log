export interface Validator {
  validate(data: any, model?: any): Error | undefined
}
