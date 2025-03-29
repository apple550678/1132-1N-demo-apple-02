import menu_02 from './data_02.js'

console.log('menu_02', menu_02)
const section = document.querySelector('.section-center')

const displayMenu = () => {
  const menuInfo = menu_02
    .map((item) => {
      const { id, title, category, price, img, desc } = item
      return `
        <article class="menu-item">
              <img src="${img}" alt="${title}" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">
                  ${desc}
                </p>
              </div>
            </article>`
    })
    .join('')
  console.log('menuInfo', menuInfo)
  section.innerHTML = menuInfo
}

window.addEventListener('DOMContentLoaded', () => {
  displayMenu()
})
