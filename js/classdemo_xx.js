const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_02':
      p.innerHTML = `<iframe src='./demo/w01_dom_02/index.html' width='100%' height='100%' />`
      break
    case 'w02_dom_02':
      p.innerHTML = `<iframe src='./demo/w02_dom_02/index.html' width='100%' height='100%' />`
      break
    case 'w03_tictactoe_02':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_02/tictactoe_02.html' width="100%" height="100%" />`
      break
    case 'w03_p1_02':
      p.innerHTML = `<iframe src='./demo/w03_basics_02/p1_02/p1_02.html' width="100%" height="100%" />`
      break
    case 'w04_p2_02':
      p.innerHTML = `<iframe src='./demo/w04_basics_02/p2_02/p2_02.html' width="100%" height="100%" />`
      break
  }
}
