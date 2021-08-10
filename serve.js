const models = require('./models')

const path = require('path')
const express = require('express')
const app  = express()
const PORT = 3000
const DOCUMENT_ROOT = path.join(__dirname, 'public')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(DOCUMENT_ROOT))

app.get('/', (req, res) =>{
  res.sendFile(path.join(DOCUMENT_ROOT, 'index.html'))
})
app.get('/api/category', async (req, res) =>{
  const category = await models.Category.findAll()
  res.json(category)
})
app.get('/api/task', async (req, res) =>{
  const task = await models.Task.findAll({
    include: models.Category,
    attributes: ['id', 'title', 'done', 'Category.name'],
    order: [
      ['id', 'ASC']
    ]
  })
  res.json(task)
})
app.post('/api/task/new', async (req, res) =>{
  try{
    const task = await models.Task.create({
      title: req.body.title,
      categoryId: Number(req.body.category)
    })
    res.json({status: true})
  }
  catch(e){
    res.json({status: false, message: e.message})
  }
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});