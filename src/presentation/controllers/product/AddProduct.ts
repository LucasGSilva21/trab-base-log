import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { AddProduct } from '../../../domain/usecases/product'
import { ok } from '../../helpers/http-helper'
import { validateResponseError } from '../../helpers/validate-response-error'

export class AddProductController implements Controller {
  private readonly addProduct: AddProduct

  constructor (addProduct: AddProduct) {
    this.addProduct = addProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, description, purchasePrice, salePrice, quantity } = httpRequest.body

      const product = await this.addProduct.add({
        name,
        description,
        purchasePrice,
        salePrice,
        quantity
      })

      return ok(product)
    } catch (error) {
      return validateResponseError(error)
    }
  }
}
