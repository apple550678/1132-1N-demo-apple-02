import express from 'express'

const app_02 = express()

app_02.use(express.static('public'))
app_02.set('view engine', 'ejs')

app_02.use('/product_02/static', (req, res, next) => {
  res.render('product_02/static_02', {
    title: 'Get Products - Static',
    name: '李國蘋',
    id: '213410102',
  })
})

app_02.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: '李國蘋',
    id: '213410102',
  })
})

const port = process.env.PORT || 5000

app_02.listen(port, () => {
  console.log(`Connecting on port: ${port}`)
})
