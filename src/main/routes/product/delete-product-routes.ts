import { Router } from 'express'
import { makeDeleteProductController } from '../../factories/product'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.delete('/products/:id', adaptRoute(makeDeleteProductController()))
}
