const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res) => {
  const { usuario, clave } = req.body

  // Verificar si el usuario y la clave son correctos
  if (usuario === process.env.USER_UBB && clave === process.env.PASS_UBB) {
    res.json({ success: true })
  } else {
    res
      .status(401)
      .json({ success: false, message: 'Usuario o clave incorrectos' })
  }
})

app.get('/', (req, res) => {
  res.send('NEST CONSULTORES - LOGIN APP')
})

// mostrar datos de formularios
app.use(express.json({ limit: '2mb' }))
app.use(cors())

// port
const port = 3003

app.listen(port, () => {
  console.log(`Server's running at port ${port}`)
})
