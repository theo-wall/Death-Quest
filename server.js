const express = require('express')
const deathQuestRouter = require('./public/deathQuestRoutes')



const app = express()
const port = 3000

app.use(express.static('public'))
app.use(deathQuestRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

