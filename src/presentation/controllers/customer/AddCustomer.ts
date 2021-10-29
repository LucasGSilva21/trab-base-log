import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { AddCustomer } from '../../../domain/usecases/customer'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class AddCustomerController implements Controller {
  private readonly addCustomer: AddCustomer

  constructor (addCustomer: AddCustomer) {
    this.addCustomer = addCustomer
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        name,
        email,
        cpf,
        birthDate,
        gender,
        phone,
        address
      } = httpRequest.body

      const customer = await this.addCustomer.add({
        name,
        email,
        cpf,
        birthDate,
        gender,
        phone,
        address
      })

      return ok(customer)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
