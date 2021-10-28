import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { GetAllProduct } from '../../../domain/usecases/product'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class GetAllProductController implements Controller {
  private readonly getAllProduct: GetAllProduct

  constructor (getAllProduct: GetAllProduct) {
    this.getAllProduct = getAllProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const products = await this.getAllProduct.getAll()

      return ok(products)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
