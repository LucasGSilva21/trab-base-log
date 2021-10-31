import { Router } from 'express'
import { makeDeleteSaleController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.delete('/sales/:id', adaptRoute(makeDeleteSaleController()))
}
