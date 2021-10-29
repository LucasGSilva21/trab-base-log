import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetAllCustomer } from '../../../domain/usecases/customer'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetAllCustomerController implements Controller {
  private readonly getAllCustomer: GetAllCustomer

  constructor (getAllCustomer: GetAllCustomer) {
    this.getAllCustomer = getAllCustomer
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const customers = await this.getAllCustomer.getAll()

      return ok(customers)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
