import { mailSchema } from '../../DataBases/Mail/MailSchema'
import { Entity } from '../entity/Entity'

type MailProps = {

  title: string
  description: string
  from: string
  to: string
}

export class Mail extends Entity<MailProps>{

  constructor(props: MailProps) {

    super(props)
  }

  get create() {

    return mailSchema.create(this.props)
  }
}