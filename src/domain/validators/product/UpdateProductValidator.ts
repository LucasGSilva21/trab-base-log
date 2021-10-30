import { Validator } from '../../protocols'
import { UpdateProductModel } from '../../repositories/product'
import { InvalidParamError } from '../../../utils/errors'
import { ProductModel } from '../../models/Product'

export class UpdateProductValidator implements Validator {
  validate (
    updateProductModel: UpdateProductModel,
    productModel: ProductModel
  ): Error | undefined {
    if (
      updateProductModel.purchasePrice &&
      isNaN(updateProductModel.purchasePrice)
    ) {
      throw new InvalidParamError(
        'purchasePrice',
        'Purchase price must be a number'
      )
    }

    if (
      updateProductModel.salePrice &&
      isNaN(updateProductModel.salePrice)
    ) {
      throw new InvalidParamError(
        'salePrice',
        'Sale price must be a number'
      )
    }

    if (
      updateProductModel.quantity &&
      (isNaN(updateProductModel.quantity) ||
      !Number.isInteger(updateProductModel.quantity) ||
      updateProductModel.quantity < 0)
    ) {
      throw new InvalidParamError(
        'quantity',
        'The quantity must be a positive integer'
      )
    }

    if (
      updateProductModel.purchasePrice &&
      updateProductModel.salePrice &&
      updateProductModel.purchasePrice > updateProductModel.salePrice
    ) {
      throw new InvalidParamError(
        'purchasePrice',
        'Sale price must be greater than to purchase price'
      )
    } else if (
      updateProductModel.purchasePrice &&
      !updateProductModel.salePrice &&
      updateProductModel.purchasePrice > productModel.salePrice
    ) {
      throw new InvalidParamError(
        'purchasePrice',
        'Sale price must be greater than to purchase price'
      )
    } else if (
      !updateProductModel.purchasePrice &&
      updateProductModel.salePrice &&
      productModel.purchasePrice > updateProductModel.salePrice
    ) {
      throw new InvalidParamError(
        'purchasePrice',
        'Sale price must be greater than to purchase price'
      )
    }

    return undefined
  }
}
