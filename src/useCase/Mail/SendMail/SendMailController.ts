import { Request, Response } from 'express'
import { SendMailUseCase } from './SendMailUseCase'

export class SendMailController {

  constructor(private sendMailUseCase: SendMailUseCase) { }

  handle(request: Request, response: Response) {

    const { title, description, from, user_email } = request.body

    try {

      const sendMail = this.sendMailUseCase.execute(title, description, from, user_email)
      return response.status(201).send(sendMail)
    }
    catch (exception) {

      return response.status(400).json(exception)
    }

  }
}