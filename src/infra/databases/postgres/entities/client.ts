import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../helpers/base-entity'
import { Gender } from '../../../../domain/protocols'

@Entity({ name: 'clients' })
export class PgClient extends BaseEntity {
  @Column()
  name: string

  @Column()
  email: string

  @Column()
  cpf: string

  @Column()
  birthDate: Date

  @Column({ type: 'varchar' })
  gender: Gender

  @Column()
  phone: string

  @Column()
  address: string
}
