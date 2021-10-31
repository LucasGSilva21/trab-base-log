import { Router } from 'express'
import { makeGetAverageTicketController } from '../../factories/sale'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/avg', adaptRoute(makeGetAverageTicketController()))
}
