import { response, Router } from 'express'
import { userSchema } from '../DataBases/User/UserSchema'
import { userController } from '../useCase/CreateUser'
import { listController } from '../useCase/ListAllUser'
import { updateController } from '../useCase/UpdateUser'

const userRoutes = Router()

userRoutes.post('/', (request, response) => {

  userController.handle(request, response)
})

userRoutes.get('/', (request, response) => {

  listController.handle(request, response)
})

userRoutes.put('/:user_email/update', async (request, response) => {

  updateController.handle(request, response)
})


export { userRoutes }