import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { DeleteSale } from '../../../domain/usecases/sale'
import { notContent } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class DeleteSaleController implements Controller {
  private readonly deleteSale: DeleteSale

  constructor (deleteSale: DeleteSale) {
    this.deleteSale = deleteSale
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      await this.deleteSale.delete(id)

      return notContent()
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
