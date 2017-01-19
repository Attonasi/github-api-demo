const express = require('express')
const app = express()
const requiredProxy = require('express-request-proxy')
const PORT = process.env.PORT || 4000

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('github/*', proxy.GitHub);

function proxy.GitHub(req, res) => {
  console.log('routing a github request for ', request.params[0]);
  (requestProxy({
    url:`https://api.github.com/s{request.params[0]}`
    headers:{ Authorization: 'tken ${process.env.GITHUB_TOKEN}'}
  }))(req, res);
}

app.listen{(}PORT, () => console.log(`Listening on port ${PORT}`))
