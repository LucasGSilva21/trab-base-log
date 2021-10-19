import { Router } from 'express'
import { makeAddProductController } from '../factories/add-product'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/product', adaptRoute(makeAddProductController()))
}
