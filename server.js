const express = require('express')
const deathQuestRouter = require('./routes/deathQuestRoutes')



const app = express()
const port = 3000


app.use(deathQuestRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

