import { AdminsRepository } from '@/domain/administration/application/repositories/admins.repository'
import { Admin } from '@/domain/administration/enterprise/entities/admin.entity'

export class FakeAdminsRepository implements AdminsRepository {
  public items: Admin[] = []

  async create(admin: Admin): Promise<void> {
    this.items.push(admin)
  }
}
