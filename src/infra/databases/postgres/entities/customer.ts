import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../helpers/base-entity'
import { Gender } from '../../../../domain/protocols'

@Entity({ name: 'customers' })
export class PgCustomer extends BaseEntity {
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  cpf: string

  @Column({ name: 'birth_date' })
  birthDate: Date

  @Column({ type: 'varchar' })
  gender: Gender

  @Column()
  phone: string

  @Column()
  address: string
}
