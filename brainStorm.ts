import { userSchema } from "./src/DataBases/User/UserSchema";

//---- Lógica de Acesso aos Dados ----
// Dos métodos:
// -- Create 
// -- FindByEmail
// -- ListAllUsers

const testf = async () => {

  const test = await userSchema.findAll()
  //Puxar todos os usuários
  //console.log(test.length)
  //Mostrar a quantidade dos Usuários
  const oneUser = await userSchema.findByPk(3)
  //Seleciona o Id do Usuário
  //console.log(oneUser?.get())
  //Pegando apenas um User pelo seu Id
  //console.log(await userSchema.findOne({
  //where: {
  // email: "guirramatheus1@gmail.com"
  //}
  //}))

  //console.log(await userSchema.findOne({

  //where: { email: "ben10original@gmail.com" }
  //}))

  return await userSchema.findOne({

    where: { email: "ben10Original@gmail.com" }
  })

}

const email = "guirramatheus1@gmail.com";


const testFunc = async (email: string) => {

  const user = await userSchema.findOne({

    where: { email: email }
  })

  //console.log(user?.get())


}



//---- Email Sender Logic ----

const sendMail = async (user_email: string) => {

  const newUserMail = await userSchema.findAll({
    where: { email: user_email }
  })

  //console.log(await newUserMail + "--- 🎃🎊🎋")
  return newUserMail

}

const theMails = ["guirramatheus1@gmail.com", "guirramatheus2@gmail.com", "guirramatheus3@gmail.com",]
theMails.forEach(async (Mail) => {

  const mailFunc = await sendMail(Mail)
  //console.log(mailFunc)
})


//---- Facilitar acesso as propriedades ---- Getters e Setters:

class Game {

  private server: string
  private id: string = "12345"

  constructor(server_client: string) {

    this.server = server_client
  }

}


const r6 = new Game("587.89.34.12")
console.log(r6)