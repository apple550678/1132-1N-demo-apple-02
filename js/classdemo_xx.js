const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_xx':
      p.innerHTML = `<iframe src='./demo/w01_dom_xx/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_xx':
      p.innerHTML = `<iframe src='./demo/w02_dom_xx/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_xx':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_xx/tictactoe_xx.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_xx':
      p.innerHTML = `<iframe src='./demo/w03_basics_xx/p1_xx/p1_xx.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_xx':
      p.innerHTML = `<iframe src='./demo/w04_basics_xx/p2_xx/p2_xx.html' width="100%" height="100%" />`;
      break;
  }
}

function showQuiz1(item) {
  switch (item) {
    case 'p1_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p1_xx/src/p1_xx.html' width='100%' height='100%' />`;
      break;
    case 'p2_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p2_xx/src/p2_xx.html' width='100%' height='100%' />`;
      break;
    case 'p3_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p3_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
    case 'p4_xx':
      p.innerHTML = `<iframe src='./exams/quiz1_xx/p4_xx/p4_xx.html' width="100%" height="100%" />`;
      break;
  }
}
function showMid(item) {
  switch (item) {
    case 'm1_xx':
      p.innerHTML = `<iframe src='./exams/mid1_02/m1_02/src/p1_02.html' width='100%' height='100%' />`;
      break;
    case 'm2_xx':
      p.innerHTML = `<iframe src='./exams/mid1_02/m2_02/p2_02.html' width='100%' height='100%' />`;
      break;
    case 'm3_xx':
      p.innerHTML = `<iframe src='./exams/mid1_02/m3_02/p3_02.html' width="100%" height="100%" />`;
      break;
  }
}
