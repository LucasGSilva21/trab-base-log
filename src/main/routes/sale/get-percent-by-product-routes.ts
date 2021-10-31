import { Router } from 'express'
import { makeGetPercentByProductController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/percent', adaptRoute(makeGetPercentByProductController()))
}
