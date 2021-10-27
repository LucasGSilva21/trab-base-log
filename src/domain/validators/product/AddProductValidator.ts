import { Validator } from '../../protocols'
import { AddProductModel } from '../../repositories/product'
import { MissingParamError, InvalidParamError } from '../../../utils/errors'

export class AddProductValidator implements Validator {
  validate (addProductModel: AddProductModel): Error | undefined {
    const requiredFields = ['name', 'purchasePrice', 'salePrice', 'quantity']

    for (const field of requiredFields) {
      if (addProductModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    if (isNaN(addProductModel.purchasePrice)) {
      throw new InvalidParamError(
        'purchasePrice',
        'Purchase price must be a number'
      )
    }

    if (isNaN(addProductModel.salePrice)) {
      throw new InvalidParamError(
        'salePrice',
        'Sale price must be a number'
      )
    }

    if (
      isNaN(addProductModel.quantity) ||
      !Number.isInteger(addProductModel.quantity) ||
      addProductModel.quantity < 0
    ) {
      throw new InvalidParamError(
        'quantity',
        'The quantity must be a positive integer'
      )
    }

    if (addProductModel.purchasePrice > addProductModel.salePrice) {
      throw new InvalidParamError(
        'purchasePrice',
        'Sale price must be greater than to purchase price'
      )
    }

    return undefined
  }
}
