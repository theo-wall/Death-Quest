const express = require('express')
const deathQuestRouter = require('./routes/deathQuestRoutes')



const app = express()
const port = 3000

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.use(deathQuestRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

