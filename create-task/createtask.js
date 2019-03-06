var i = 0; //Start Point
var images = [];
var time = 3000;

//image list

images[0] = "images/pearl-cupcake.jpg";
images[1] = "images/lemon-curd-tart.jpg";
images[2] = "images/rye-bread.jpg";

//change images
function changeImg (){
  document.slide.src = images[i];


  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()",time);
}

window.onload = changeImg;
