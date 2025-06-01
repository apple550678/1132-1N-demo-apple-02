import express from 'express'
const router = express.Router()

import db from '../utils/database.js'

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_02`)
    console.log('results', JSON.stringify(results.rows))
    // res.json(results.rows)
    res.render('product_02/index', {
      data: results.rows,
      title: 'Get Products From PostgreSQL Server',
      name: '李國蘋',
      id: '213410102',
    })
  } catch (error) {
    console.log(error)
  }
})

export default router
