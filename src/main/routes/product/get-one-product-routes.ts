import { Router } from 'express'
import { makeGetOneProductController } from '../../factories/product'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/products/:id', adaptRoute(makeGetOneProductController()))
}
