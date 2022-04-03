import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {

  constructor(private userUseCase: CreateUserUseCase) { }
  handle(request: Request, response: Response): Response {

    const { name, email, password } = request.body

    try {

      const createUser = this.userUseCase.execute({ name, email, password })
      return response.status(201).json(createUser)
    }
    catch (exception) {

      return response.status(400).json(`${exception}`)
    }


  }
}