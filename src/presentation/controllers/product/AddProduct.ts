import { HttpRequest, HttpResponse, Controller } from '../../protocols'
import { AddProduct } from '../../../domain/usecases/product'
import { ok, badRequest, serverError } from '../../helpers/http-helper'

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
      if (error.name === 'InvalidParamError' || error.name === 'MissingParamError') {
        return badRequest(error)
      }

      console.log(error)

      return serverError(error)
    }
  }
}
