import pkg from 'pg'

const { Pool } = pkg

let pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: '071535',
  database: 'js_demo_02',
})

// console.log('connect database', pool.options)

export default pool
