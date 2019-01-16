const express = require('express')
const app = express()
const port = 3002

const data = require('./data.json')

app.use(express.static('public'))


app.get('/', (req, res, next) => {
  res.status(200)
  res.send(data)
})

app.get('/:tag', (req, res, next) => {
  let tag = req.params.tag
  if(data.tags.includes(tag)) {
    let filteredData = data.songs.filter(song => song.tags.includes(tag))
    res.status(200)
    res.send(filteredData)
  } else {
    res.status(404)
    // res.send(`try one of these: ${data.tags}`)
    res.send('try one of these:', data.tags)
  }
})

app.listen(port, () => {
  console.log(`Party on port: ${port}`)
})