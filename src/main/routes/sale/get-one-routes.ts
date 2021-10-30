import { Router } from 'express'
import { makeGetOneSaleController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/sales/:id', adaptRoute(makeGetOneSaleController()))
}
