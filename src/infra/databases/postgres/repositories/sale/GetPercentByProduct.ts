import { GetPercentByProductRepository, ResultPercentProducts } from '../../../../../domain/repositories/sale'
import { PgRepository } from '../../helpers/repository'
import { getManager } from 'typeorm'

export class PgGetPercentByProductRepository extends PgRepository implements GetPercentByProductRepository {
  async getPercentByProduct (): Promise<ResultPercentProducts[]> {
    const entityManager = getManager()

    const report = await entityManager.query(`
      SELECT
        products.name,
        CAST(SUM(sales.quantity)as float)/CAST((SELECT SUM(sales.quantity) FROM sales) as float) as total
      FROM 
        sales
      INNER JOIN
        products
      ON 
        sales.product_id = products.id
      GROUP BY 
        sales.product_id, products.name
    `)

    return report
  }
}
