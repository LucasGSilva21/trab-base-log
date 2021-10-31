import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetAverageTicket } from '../../../domain/usecases/sale'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetAverageTicketController implements Controller {
  private readonly getAverageTicket: GetAverageTicket

  constructor (getAverageTicket: GetAverageTicket) {
    this.getAverageTicket = getAverageTicket
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { initialDate, finalDate } = httpRequest.query

      const avg = await this.getAverageTicket.getAverageTicket(initialDate, finalDate)

      return ok(avg)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
