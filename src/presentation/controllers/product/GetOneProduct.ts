import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetOneProduct } from '../../../domain/usecases/product'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetOneProductController implements Controller {
  private readonly getOneProduct: GetOneProduct

  constructor (getOneProduct: GetOneProduct) {
    this.getOneProduct = getOneProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const product = await this.getOneProduct.getOne(id)

      return ok(product)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
