import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { UpdateCustomer } from '../../../domain/usecases/customer'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class UpdateCustomerController implements Controller {
  private readonly updateCustomer: UpdateCustomer

  constructor (updateCustomer: UpdateCustomer) {
    this.updateCustomer = updateCustomer
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const fields = httpRequest.body

      const customer = await this.updateCustomer.update(id, fields)

      return ok(customer)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
