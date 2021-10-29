import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { AddClient } from '../../../domain/usecases/client'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class AddClientController implements Controller {
  private readonly addClient: AddClient

  constructor (addClient: AddClient) {
    this.addClient = addClient
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

      const client = await this.addClient.add({
        name,
        email,
        cpf,
        birthDate,
        gender,
        phone,
        address
      })

      return ok(client)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
