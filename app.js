const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrash = require('./generate_trash')
const app = express()
const port = 3000


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let options = req.body
  let talks = generateTrash(options.Job)
  res.render('index', { talks: talks, options: options })
})

app.listen(port, () => {
  console.log(`this express is running on http://localhost:${port}`)
})