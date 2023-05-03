import { Admin } from '../entities/admin.entity'
import { HashProvider } from '../providers/hash.provider'
import { AdminsRepository } from '../repositories/admins.repository'

interface CreateAdminUseCaseRequest {
  username: string
  password: string
}

export class CreateAdminUseCase {
  constructor(
    private adminsRepository: AdminsRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute({ username, password }: CreateAdminUseCaseRequest) {
    const passwordHash = await this.hashProvider.hash(password)

    const admin = Admin.create({ username, passwordHash })

    await this.adminsRepository.create(admin)

    return admin
  }
}
