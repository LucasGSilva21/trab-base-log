import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetOneCustomer } from '../../../domain/usecases/customer'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetOneCustomerController implements Controller {
  private readonly getOneCustomer: GetOneCustomer

  constructor (getOneCustomer: GetOneCustomer) {
    this.getOneCustomer = getOneCustomer
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const customer = await this.getOneCustomer.getOne(id)

      return ok(customer)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
