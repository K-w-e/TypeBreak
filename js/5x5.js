let imgs = ["1.png", "Fontamara_01.jpg", "3.png", "4.png", "next.png"];
let htimer;
let counterImg = 0;
let images;
$( document ).ready(function() {
    i=0;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    htimer = setInterval(function(){
        document.body.style.backgroundImage = "url('img/"+imgs[i]+"')";
        i++;
        if(i == imgs.length) 
            i=0;  
    }, 800);
});

function stop() {
    document.body.style.backgroundImage = "";
}

function next() {
  if(counterImg == images.length-1)
    counterImg=0;
  else 
    counterImg++;
  document.getElementById("container").style.backgroundImage = "url("+images[counterImg]+")";
}

function prev() {
  if(counterImg == 0)
    counterImg=images.length-1;
  else 
    counterImg--;
  document.getElementById("container").style.backgroundImage = "url("+images[counterImg]+")";
}
 
function uno() {
    stop();
    clearInterval(htimer);
    counterImg=0;
    document.getElementById("container").style.display = "block";
    document.getElementById("container").style.backgroundSize = "cover";
    document.getElementById("container").style.backgroundPosition = "center";
    document.getElementById("container").style.backgroundAttachment = "fixed";
    images = [
      "img/1.png",
      "img/3.png",
      "img/4.png"
    ]
    document.getElementById("container").style.backgroundImage = "url("+images[counterImg]+")";
}

function due() {
  stop();
  clearInterval(htimer);
  counterImg=0;
  document.getElementById("container").style.display = "block";
  document.getElementById("container").style.backgroundSize = "cover";
  document.getElementById("container").style.backgroundPosition = "center";
  document.getElementById("container").style.backgroundAttachment = "fixed";
  images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/200"
  ]
  document.getElementById("container").style.backgroundImage = "url("+images[counterImg]+")";

}