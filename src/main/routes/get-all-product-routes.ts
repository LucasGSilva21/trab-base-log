import { Router } from 'express'
import { makeGetAllProductController } from '../factories/get-all-product'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/products', adaptRoute(makeGetAllProductController()))
}
