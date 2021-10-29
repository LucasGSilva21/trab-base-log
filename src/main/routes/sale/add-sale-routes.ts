import { Router } from 'express'
import { makeAddSaleController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/sales', adaptRoute(makeAddSaleController()))
}
