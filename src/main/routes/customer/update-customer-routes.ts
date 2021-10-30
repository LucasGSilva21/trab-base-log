import { Router } from 'express'
import { makeUpdateCustomerController } from '../../factories/customer'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.put('/customers/:id', adaptRoute(makeUpdateCustomerController()))
}
