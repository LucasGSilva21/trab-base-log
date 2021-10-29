import { Router } from 'express'
import { makeGetAllCustomerController } from '../../factories/customer'
import { adaptRoute } from '../../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/customers', adaptRoute(makeGetAllCustomerController()))
}
