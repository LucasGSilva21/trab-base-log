import { Router } from 'express'
import { makeGetAllClientController } from '../../factories/client'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/clients', adaptRoute(makeGetAllClientController()))
}
