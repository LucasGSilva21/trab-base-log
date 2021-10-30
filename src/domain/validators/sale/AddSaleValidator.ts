import { Validator } from '../../protocols'
import { AddSaleModel } from '../../repositories/sale'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'
import { ProductModel } from '../../models/Product'

export class AddSaleValidator implements Validator {
  validate (
    addSaleModel: AddSaleModel,
    productModel: ProductModel
  ): Error | undefined {
    const requiredFields = ['productId', 'customerId', 'saleDate', 'quantity']

    for (const field of requiredFields) {
      if (addSaleModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    if (isNaN(Date.parse(addSaleModel.saleDate.toString()))) {
      throw new InvalidParamError(
        'saleDate',
        'invalid sale date'
      )
    }

    if (
      isNaN(addSaleModel.quantity) ||
      !Number.isInteger(addSaleModel.quantity) ||
      addSaleModel.quantity < 0
    ) {
      throw new InvalidParamError(
        'quantity',
        'The quantity must be a positive integer'
      )
    }

    if (productModel.quantity < addSaleModel.quantity) {
      throw new InvalidParamError(
        'quantity',
        'There is no stock available'
      )
    }

    return undefined
  }
}
