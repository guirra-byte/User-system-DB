import { Entity } from "./entity/Entity";
import { userSchema } from '../DataBases/User/UserSchema'

type UserProps = {

  name: string
  email: string
  password: string
  admin?: boolean
}

export class User extends Entity<UserProps>{

  constructor(props: UserProps) {

    super(props)
    props.admin = false

  }

  get create() {

    return userSchema.create(this.props)
  }

}

