import { HashProvider } from '@/domain/shared/application/providers/hash.provider'
import { AdminsRepository } from '../repositories/admins.repository'
import { CreateAdminUseCase } from './create-admin.use-case'

const fakeHashProvider: HashProvider = {
  hash: async function (payload: string) {
    return `${payload}-${payload}`
  },
  compare: async function (payload: string, hashed: string) {
    return payload === hashed.split('-')[0]
  },
}

const fakeAdminsRepository: AdminsRepository = {
  create: async function () {},
}

test('create an admin', async () => {
  const createAdmin = new CreateAdminUseCase(
    fakeHashProvider,
    fakeAdminsRepository,
  )

  const admin = await createAdmin.execute({
    username: 'admin',
    password: '123',
  })

  expect(admin.passwordHash).toBe('123-123')
})
