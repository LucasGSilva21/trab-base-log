import { Router } from 'express'
import { makeAddProductController } from '../../factories/product'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/products', adaptRoute(makeAddProductController()))
}
