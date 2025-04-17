import { mid_products_02 } from './products_data_02.js';

function renderMenu(menu) {
  const menuHTML = menu
    .map((item) => {
      return `
        <article class="menu-item">
          <img src="${item.img}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
          </div>
        </article>
      `;
    })
    .join('');
}

renderMenu(mid_products_02);
