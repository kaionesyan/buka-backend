import { Admin } from '../entities/admin.entity'

export interface AdminsRepository {
  create(admin: Admin): Promise<void>
}
