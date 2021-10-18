import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../helpers/base-entity'

@Entity({ name: 'products' })
export class PgProduct extends BaseEntity {
  @Column()
  name: string

  @Column({ nullable: true })
  description?: string

  @Column({ type: 'decimal' })
  purchasePrice: number

  @Column({ type: 'decimal' })
  salePrice: number

  @Column()
  quantity: number
}
