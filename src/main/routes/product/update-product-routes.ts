import { Router } from 'express'
import { makeUpdateProductController } from '../../factories/product'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.put('/products/:id', adaptRoute(makeUpdateProductController()))
}
