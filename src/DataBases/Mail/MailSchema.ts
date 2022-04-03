import Sequelize from "sequelize"
import { connection } from '../Database'

const mailSchema = connection.define('mailBody', {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  from: {
    type: Sequelize.STRING,
    allowNull: false
  },
  to: {
    type: Sequelize.STRING,
    allowNull: false
  }

})



mailSchema.sync({ force: false }).then(() => {

  console.log("A tabela de Emails já foi criada")
})

export { mailSchema }