export const productSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    purchasePrice: {
      type: 'number'
    },
    salePrice: {
      type: 'number'
    },
    quantity: {
      type: 'integer'
    }
  },
  required: ['id', 'name', 'purchasePrice', 'salePrice', 'quantity']
}
