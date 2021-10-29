import { Validator } from '../../protocols'
import { AddSaleModel } from '../../repositories/sale'
import { MissingParamError } from '../../../utils/errors'

export class AddSaleValidator implements Validator {
  validate (addSaleModel: AddSaleModel): Error | undefined {
    const requiredFields = ['productId', 'customerId', 'saleDate', 'quantity']

    for (const field of requiredFields) {
      if (addSaleModel[field] === undefined) {
        throw new MissingParamError(field)
      }
    }

    return undefined
  }
}
