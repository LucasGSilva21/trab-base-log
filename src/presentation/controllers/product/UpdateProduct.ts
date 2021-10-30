import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { UpdateProduct } from '../../../domain/usecases/product'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class UpdateProductController implements Controller {
  private readonly updateProduct: UpdateProduct

  constructor (updateProduct: UpdateProduct) {
    this.updateProduct = updateProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const fields = httpRequest.body

      const product = await this.updateProduct.update(id, fields)

      return ok(product)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
