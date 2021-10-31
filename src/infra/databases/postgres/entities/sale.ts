import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from '../helpers/base-entity'
import { PgProduct } from './product'
import { PgCustomer } from './customer'

@Entity({ name: 'sales' })
export class PgSale extends BaseEntity {
  @Column({ name: 'product_id' })
  productId: string

  @Column({ name: 'customer_id' })
  customerId: string

  @Column({ name: 'sale_date' })
  saleDate: Date

  @Column()
  quantity: number

  @ManyToOne(() => PgProduct)
  @JoinColumn({ name: 'product_id' })
  product: PgProduct

  @ManyToOne(() => PgCustomer)
  @JoinColumn({ name: 'customer_id' })
  customer: PgCustomer
}
