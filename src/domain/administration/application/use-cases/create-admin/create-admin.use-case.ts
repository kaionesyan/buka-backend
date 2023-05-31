import { Admin } from '@/domain/administration/enterprise/entities/admin.entity'
import { HashProvider } from '@/domain/shared/application/providers/hash/hash.provider'
import { AdminsRepository } from '../../repositories/admins.repository'

interface CreateAdminUseCaseRequest {
  username: string
  password: string
}

export class CreateAdminUseCase {
  constructor(
    private hashProvider: HashProvider,
    private adminsRepository: AdminsRepository,
  ) {}

  async execute({ username, password }: CreateAdminUseCaseRequest) {
    const passwordHash = await this.hashProvider.hash(password)

    const admin = Admin.create({ username, passwordHash })

    await this.adminsRepository.create(admin)

    return admin
  }
}
