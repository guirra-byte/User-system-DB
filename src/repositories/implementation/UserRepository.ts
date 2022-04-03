import { IUserRepository } from "../IUserRepository";
import { userSchema } from "../../DataBases/User/UserSchema";
import { User } from "../../model/User";

type MailProps = {

  title: string
  description: string
  from: string
  to: string | Array<string>
}

export class UserRepository implements IUserRepository {

  constructor() {
  }

  private static INSTANCE: UserRepository

  public static getInstance(): UserRepository {

    if (!UserRepository.INSTANCE) {

      UserRepository.INSTANCE = new UserRepository()
    }

    return UserRepository.INSTANCE
  }

  async findByEmail(user_email: string) {

    const verifyEmail = await userSchema.findOne({
      where: { email: user_email }
    })

    const name = await verifyEmail?.getDataValue('name')
    console.log(name)
  }

  async create(name: string, email: string, password: string): Promise<void> {

    const newUserProps = {

      name: name,
      email: email,
      password: password,
    }

    const newUser = new User(newUserProps)
    newUser.create

    console.log(newUser + '---- Chegou Aqui ---- 🎃🎊🎋')
  }

  async list() {

    const all = await userSchema.findAll({
      raw: true
    })
    return all
  }

}