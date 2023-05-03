import { BaseEntity } from '@/core/entities/base.entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id.entity'
import { Optional } from '@/core/types/optional.type'

interface AdminProps {
  username: string
  passwordHash: string
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
}

export class Admin extends BaseEntity<AdminProps> {
  get username() {
    return this.props.username
  }

  get passwordHash() {
    return this.props.passwordHash
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get deletedAt() {
    return this.props.deletedAt
  }

  set passwordHash(value: string) {
    this.props.passwordHash = value
    this.touch()
  }

  delete() {
    this.props.deletedAt = new Date()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(props: Optional<AdminProps, 'createdAt'>, id?: UniqueEntityID) {
    const admin = new Admin({ ...props, createdAt: new Date() })

    return admin
  }
}
