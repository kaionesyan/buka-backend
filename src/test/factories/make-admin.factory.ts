import {
  Admin,
  AdminProps,
} from '@/domain/administration/enterprise/entities/admin.entity'
import { UniqueEntityID } from '@/domain/shared/enterprise/entities/unique-entity-id.entity'
import { FakeHashProvider } from '../providers/fake-hash.provider'

export const makeAdmin = async (
  override: Partial<AdminProps> = {},
  id?: UniqueEntityID,
) => {
  const fakeHashProvider = new FakeHashProvider()

  const admin = Admin.create(
    {
      username: 'admin',
      passwordHash: await fakeHashProvider.hash('123'),
      ...override,
    },
    id,
  )

  return admin
}
