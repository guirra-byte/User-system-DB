import { app } from './app'
import { userRoutes } from '../src/routes/User.routes'
import { connection } from '../src/DataBases/Database'
import { mailRoutes } from './routes/Mail.routes'

app.use('/user', userRoutes)
app.use('/mail', mailRoutes)

connection
  .authenticate()
  .then(() => {

    console.log("O Banco de dados já está rodando")
  })
  .catch((error: Error) => {

    console.log(error)
  })

app.listen(2309, () => {
  console.log("O Server já está rodando")
})



