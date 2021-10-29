import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetAllClient } from '../../../domain/usecases/client'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetAllClientController implements Controller {
  private readonly getAllClient: GetAllClient

  constructor (getAllClient: GetAllClient) {
    this.getAllClient = getAllClient
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const clients = await this.getAllClient.getAll()

      return ok(clients)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
