import { response, Router } from 'express'
import { sendMailController } from '../useCase/Mail/SendMail'
import { transporter } from '../model/Mail/Mail.config'
import ejs from 'ejs'

const mailRoutes = Router()
export { mailRoutes };

mailRoutes.post('/sendMail', (request, response) => {

  sendMailController.handle(request, response)
})


