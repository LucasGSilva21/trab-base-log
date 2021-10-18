import { HttpRequest, HttpResponse, Controller } from '../protocols'
import { AddProduct } from '../../core/usecases/AddProduct'
import { MissingParamError } from '../../utils/errors'
import { ok, badRequest, serverError } from '../helpers/http-helper'

export class AddProductController implements Controller {
  private readonly addProduct: AddProduct

  constructor (addProduct: AddProduct) {
    this.addProduct = addProduct
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'description', 'purchasePrice', 'salePrice', 'quantity']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

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
      return serverError(error)
    }
  }
}
