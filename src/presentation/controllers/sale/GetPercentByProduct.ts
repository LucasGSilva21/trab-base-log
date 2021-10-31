import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetPercentByProduct } from '../../../domain/usecases/sale'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetPercentByProductController implements Controller {
  private readonly getPercentByProduct: GetPercentByProduct

  constructor (getPercentByProduct: GetPercentByProduct) {
    this.getPercentByProduct = getPercentByProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const report = await this.getPercentByProduct.getPercentByProduct()

      return ok(report)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
