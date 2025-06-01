import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import apiProductRouter from './router/api/apiProductRouter_02.js'
import ProductRouter from './router/ProductRouter_02.js'
const app_02 = express()

app_02.use(cors())
app_02.use(logger('dev'))
app_02.use(express.static('public'))
app_02.set('view engine', 'ejs')

app_02.use('/api/product_02', apiProductRouter)
app_02.use('/product_02', ProductRouter)
app_02.get('/product_02/static', (req, res, next) => {
  res.render('product_02/static_02', {
    title: 'Get Product - Static',
    name: '李國蘋',
    id: '213410102',
  })
})

app_02.get('/blog_02/static', (req, res, next) => {
  res.render('blog_02/static_02', {
    title: 'Get Blogs - Static',
    name: '李國蘋',
    id: '213410102',
  })
})

app_02.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: '李國蘋',
    id: '213410102',
  })
})

const port = process.env.PORT || 3000

app_02.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`)
})
