import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetAllSale } from '../../../domain/usecases/sale'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetAllSaleController implements Controller {
  private readonly getAllSale: GetAllSale

  constructor (getAllSale: GetAllSale) {
    this.getAllSale = getAllSale
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const sales = await this.getAllSale.getAll()

      return ok(sales)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
