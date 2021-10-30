import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetOneSale } from '../../../domain/usecases/sale'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetOneSaleController implements Controller {
  private readonly getOneSale: GetOneSale

  constructor (getOneSale: GetOneSale) {
    this.getOneSale = getOneSale
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const sale = await this.getOneSale.getOne(id)

      return ok(sale)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
