import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({ select: false })
  created_at: Date

  @UpdateDateColumn({ select: false })
  updated_at: Date
}

export { BaseEntity }
