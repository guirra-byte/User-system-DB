import { IUserRepository } from "../../repositories/IUserRepository";

type UserRequestProps = {

  name: string
  email: string
  password: string
}

export class CreateUserUseCase {

  constructor(private iUserRepository: IUserRepository) { }

  async execute({ name, email, password }: UserRequestProps) {

    const verifyEmailAlreadyExists = await this.iUserRepository.findByEmail(email)

    if (verifyEmailAlreadyExists) {

      throw new Error("A User already use this Email, try again")
    }

    const newUser = await this.iUserRepository.create(name, email, password)
    return newUser
  }
}