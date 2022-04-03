import { transporter } from "../../../model/Mail/Mail.config";

export class SendMailUseCase {

  constructor() { }
  execute(title: string, description: string, from: string, user_email: string) {

    const runMailSender = async () => {

      const sendMail = await transporter.sendMail({

        text: description,
        subject: title,
        from: `<${from}>`,
        to: [`${user_email}`],
        html: `
        <h1 style="color:#003566";>${title}</h1>
        <article>
          <p>${description}</p>
          <h3>Aproveite, foi feito com Carinho por --- Matheus Guirra Sousa ✝️<h3/>
          <h1>Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney --- ✌😎✝️</h1>
        </article>`
      })

      return sendMail

    }

    runMailSender()


  }
}