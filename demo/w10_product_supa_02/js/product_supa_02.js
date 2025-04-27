import { _supabase } from './clientSupabase_02'

const productContainer = document.querySelector('.products-container')

let product = []

console.log('mid_products_02', mid_products_02)

const fetchProduct = async () => {
  try {
    let { data, error } = await _supabase.from('product_02')
    select('*')
    return data
  } catch (err) {
    console.log(err)
  }
}

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, img } = product
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${id}-${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `
    })
    .join('')
  productContainer.innerHTML = productsContent
}

document.addEventListener('DOMContentLoaded', async () => {
  product_02 = fetchProduct()

  displayProducts(mid_products_xx)
})
