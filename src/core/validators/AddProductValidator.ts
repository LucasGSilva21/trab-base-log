import { Validator } from '../protocols'
import { AddProductModel } from '../repositories/AddProductRepository'
import { InvalidParamError } from '../../utils/errors'

export class AddProductValidator implements Validator {
  validate (addProductModel: AddProductModel): Error | undefined {
    if (addProductModel.quantity < 0) {
      throw new InvalidParamError('quantity')
    }

    if (addProductModel.purchasePrice > addProductModel.salePrice) {
      throw new InvalidParamError('purchasePrice')
    }

    return undefined
  }
}
