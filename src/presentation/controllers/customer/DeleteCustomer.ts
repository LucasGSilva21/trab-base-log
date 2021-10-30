import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { DeleteCustomer } from '../../../domain/usecases/customer'
import { notContent } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class DeleteCustomerController implements Controller {
  private readonly deleteCustomer: DeleteCustomer

  constructor (deleteCustomer: DeleteCustomer) {
    this.deleteCustomer = deleteCustomer
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      await this.deleteCustomer.delete(id)

      return notContent()
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
