import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { DeleteProduct } from '../../../domain/usecases/product'
import { notContent } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class DeleteProductController implements Controller {
  private readonly deleteProduct: DeleteProduct

  constructor (deleteProduct: DeleteProduct) {
    this.deleteProduct = deleteProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      await this.deleteProduct.delete(id)

      return notContent()
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
