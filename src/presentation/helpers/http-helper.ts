import { HttpResponse } from '../protocols'
import { ServerError } from '../../utils/errors'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const notContent = (): HttpResponse => ({
  statusCode: 204
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    name: error.name,
    message: error.message
  }
})

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: {
    name: error.name,
    message: error.message
  }
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string)
})
