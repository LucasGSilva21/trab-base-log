import { HttpRequest, HttpResponse, Controller } from '../protocols'
import { GetAllProduct } from '../../core/usecases/GetAllProduct'
import { ok, serverError } from '../helpers/http-helper'

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
      return serverError(error)
    }
  }
}
