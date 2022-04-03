import Sequelize from "sequelize"
import { connection } from '../Database'

const userSchema = connection.define('campos', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

userSchema.sync({ force: false }).then(() => {

  console.log("A tabela de campos de Users já foi criada")
})


export { userSchema }