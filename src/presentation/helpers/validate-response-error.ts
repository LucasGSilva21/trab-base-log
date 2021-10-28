import { HttpResponse } from '../protocols'
import { badRequest, serverError } from '../helpers/http-helper'

export const validateResponseError = (error: Error): HttpResponse => {
  console.log('Log Error: ', error)

  if (
    error.name === 'InvalidParamError' ||
    error.name === 'MissingParamError'
  ) {
    return badRequest(error)
  }

  return serverError(error)
}
