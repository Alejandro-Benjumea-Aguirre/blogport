const express = require('express')
const cors = require('cors')

const database = require('../../config/configDB')

class Server {
  _app
  _port

  constructor () {
    this._app = express()
    this._port = process.env.PORT || '8000'

    // this.dbConecction()
    this.middlewares()

    // Definir mis rutas
    this.routes()
  }

  middlewares () {
    // cors
    this._app.use(cors())

    // lectura y parseo del body
    this._app.use(express.json())

    // Carpeta publica
    this._app.use(express.static('public'))
  }

  routes () {
    this._app.use('/api', require('../routes'))
  }

  listen () {
    this._app.listen(this._port, () => {
      console.log('Servidor corriendo en puerto ' + this._port)
    })
  }

  sigint () {
    process.on('SIGINT', async () => {
      await database.close();
      process.exit(0);
    });
  }
}

module.exports = Server
