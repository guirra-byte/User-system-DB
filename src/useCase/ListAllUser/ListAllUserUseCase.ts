import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class ListAllUserUseCase {

  constructor(private userRepository: IUserRepository) { }
  async execute() {

    const listUser = await this.userRepository.list()
    console.log(listUser)

    return listUser
  }
}