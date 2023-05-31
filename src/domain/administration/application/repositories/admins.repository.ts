import { Admin } from '../../enterprise/entities/admin.entity'

export interface AdminsRepository {
  create(admin: Admin): Promise<void>
}
