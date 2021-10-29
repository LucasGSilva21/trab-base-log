import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { AddSale } from '../../../domain/usecases/sale'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class AddSaleController implements Controller {
  private readonly addSale: AddSale

  constructor (addSale: AddSale) {
    this.addSale = addSale
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        productId,
        customerId,
        saleDate,
        quantity
      } = httpRequest.body

      const sale = await this.addSale.add({
        productId,
        customerId,
        saleDate,
        quantity
      })

      return ok(sale)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
