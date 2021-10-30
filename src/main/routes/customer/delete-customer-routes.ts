import { Router } from 'express'
import { makeDeleteCustomerController } from '../../factories/customer'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.delete('/customers/:id', adaptRoute(makeDeleteCustomerController()))
}
