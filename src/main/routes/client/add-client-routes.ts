import { Router } from 'express'
import { makeAddClientController } from '../../factories/client'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/clients', adaptRoute(makeAddClientController()))
}
