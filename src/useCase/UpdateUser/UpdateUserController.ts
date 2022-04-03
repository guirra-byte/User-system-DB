import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {

  constructor(private updateUseCase: UpdateUserUseCase) { }
  handle(request: Request, response: Response) {

    const { user_email } = request.params

    try {

      const user = this.updateUseCase.execute(user_email, request)
      return response.status(201).json(user)
    }
    catch (exception) {
      return response.status(400).json(exception)
    }

  }
}