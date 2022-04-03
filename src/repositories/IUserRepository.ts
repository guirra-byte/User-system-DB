import { User } from "../model/User";


export interface IUserRepository {
  findByEmail(email: string): any
  create(name: string, email: string, password: string): void
  list(): void
}