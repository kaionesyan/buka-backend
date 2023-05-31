import { HashProvider } from '@/domain/shared/application/providers/hash/hash.provider'

export class FakeHashProvider implements HashProvider {
  async hash(payload: string): Promise<string> {
    return `${payload}-${payload}`
  }

  async compare(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed.split('-')[0]
  }
}
