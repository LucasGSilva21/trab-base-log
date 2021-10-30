import { Router } from 'express'
import { makeGetOneCustomerController } from '../../factories/customer'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/customers/:id', adaptRoute(makeGetOneCustomerController()))
}
