import { Validator } from '../protocols'
import { AddProductModel } from '../repositories/AddProductRepository'
import { MissingParamError, InvalidParamError } from '../../utils/errors'

export class AddProductValidator implements Validator {
  validate (addProductModel: AddProductModel): Error | undefined {
    const requiredFields = ['name', 'purchasePrice', 'salePrice', 'quantity']

    for (const field of requiredFields) {
      if (addProductModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    if (addProductModel.quantity < 0) {
      throw new InvalidParamError('quantity')
    }

    if (addProductModel.purchasePrice > addProductModel.salePrice) {
      throw new InvalidParamError('purchasePrice')
    }

    return undefined
  }
}
