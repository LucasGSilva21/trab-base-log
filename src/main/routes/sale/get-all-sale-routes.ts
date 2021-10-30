import { Router } from 'express'
import { makeGetAllSaleController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/sales', adaptRoute(makeGetAllSaleController()))
}
