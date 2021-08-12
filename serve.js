/**
 * ToDoサーバ
 *
 * @author M.Katsube < katsubemakito@gmail.com >
 * @license MIT
 */

//---------------------------------------------------------
// modules
//---------------------------------------------------------
const models = require('./models')
const path = require('path')

//---------------------------------------------------------
// define
//---------------------------------------------------------
const PORT = 3000
const DOCUMENT_ROOT = path.join(__dirname, 'public')


//---------------------------------------------------------
// express
//---------------------------------------------------------
//-----------------
// サーバー設定
//-----------------
const express = require('express')
const app  = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(DOCUMENT_ROOT))

//-----------------
// API準備
//-----------------
/**
 * カテゴリー一覧を返却
 */
app.get('/api/category', async (req, res) =>{
  const category = await models.Category.findAll()
  res.json(category)
})

/**
 * タスク一覧を返却
 */
app.get('/api/task', async (req, res) =>{
  res.json( await models.Task.getAll() )
})

/**
 * タスクを新規追加
 */
app.post('/api/task/new', async (req, res) =>{
  const result = await models.Task.add({
    title: req.body.title,
    category: req.body.category
  })
  res.json( {status: result !== false })
})

/**
 * タスクを完了
 */
app.post('/api/task/done', async (req, res) =>{
  const result = await models.Task.done(req.body.id)
  res.json( {status: result !== false })
})

/**
 * タスクを物理削除
 */
app.post('/api/task/remove', async (req, res) =>{
  const result = await models.Task.remove(req.body.id)
  res.json( {status: result !== false })
})


//-----------------
// サーバー起動
//-----------------
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});