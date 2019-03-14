let fruit = document.getElementById("fruit");
let container = document.getElementById("container");

let fruitLeft = 0;

function animate(e) {
  if(e.keyCode == 39) {
    fruitLeft += 2;
    fruit.style.left = fruitLeft + 'px'
  }
  if(e.keyCode == 37) {
    fruitLeft -= 2;
    fruit.style.left = fruitLeft + 'px'
  if (fruitLeft <= 0) {
    fruitLeft += 2;

  }
  }
//  console.log(e.keyCode);
}

//document.onkeydown = animate;
