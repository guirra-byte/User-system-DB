import { SendMailController } from "./SendMailController";
import { SendMailUseCase } from "./SendMailUseCase";

const sendMailUseCase = new SendMailUseCase()

const sendMailController = new SendMailController(sendMailUseCase)

export { sendMailController }