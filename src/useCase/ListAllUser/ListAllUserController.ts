import { Request, Response } from 'express'
import { ListAllUserUseCase } from './ListAllUserUseCase'

export class ListAllUserController {

  constructor(private listUserUseCase: ListAllUserUseCase) { }
  async handle(request: Request, response: Response) {

    try {

      const listUser = await this.listUserUseCase.execute()
      return response.status(201).send(listUser)
    }
    catch (exception) {

      return response.status(400).json(`${exception}`)
    }


  }
}