import { GetAverageTicketRepository } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { getManager } from 'typeorm'

export class PgGetAverageTicketRepository extends PgRepository implements GetAverageTicketRepository {
  async getAverageTicket (initialDate: Date, finalDate: Date): Promise<string> {
    const entityManager = getManager()

    const avg = await entityManager.query(`
      SELECT 
        AVG(sales.quantity * products.sale_price)
      FROM 
        sales
      INNER JOIN
        products
      ON 
        sales.product_id = products.id
      WHERE
        sales.sale_date
      BETWEEN
        '${initialDate}'
      AND
        '${finalDate}'
    `)

    return avg[0]
  }
}
