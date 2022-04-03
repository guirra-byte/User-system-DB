import { IUserRepository } from "../../repositories/IUserRepository";
import { userSchema } from "../../DataBases/User/UserSchema";
import { Request, Response } from 'express'

export class UpdateUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute(user_email: string, request: Request) {

    const findUser = this.userRepository.findByEmail(user_email)

    const updateUser = await userSchema.update(request.body, { where: { email: user_email } })
    return updateUser
  }
}