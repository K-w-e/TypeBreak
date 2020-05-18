let imgs = ["1.png", "Fontamara_01.jpg", "3.png", "4.png", "next.png"];
let htimer;

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
 
function uno() {
    stop();
    clearInterval(htimer);

    document.getElementById("container").style.display = "block";
    var sopra = 
    "<div class=\"mySlides\"><img src=\"img/aaa.jpg\"></div>"
    +
    "<div class=\"mySlides\"><img src=\"img/1.png\"></div>"
    +
    "<div class=\"mySlides\"><img src=\"img/4.png\"></div>"
    +
    "<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>"
    +
    "<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>";
    document.getElementById("boxSopra").innerHTML = sopra;
    if($(window).width()>780){
      var sotto = 
      "<div style=\"background-image:url(img/1.png);\"></div>"
      +
      "<div style=\"background-image:url(img/3.png);\"></div>"
      +
      "<div style=\"background-image:url(img/4.png);\"></div>"
      +  
      "<div style=\"background-image:url(img/1.png);\"></div>"
      +
      "<div style=\"background-image:url(img/3.png);\"></div>";
      document.getElementById("book").innerHTML = sotto;
    }
    
    showSlides(1);
    //plusSlides(1);
    book();
}

/* ----- slides ------ */
var slideIndex = 1;
        
function plusSlides(n) {
  showSlides(slideIndex += n);
}
        
function currentSlide(n) {
  showSlides(slideIndex = n);
}
        
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function book(){
  $("#book").turn({
    autoCenter: 'true',
    display: 'double',
    });

    /*var cw = $('#book').height()*2;
    $('#book').css({'width':cw+'px'});
    console.log(cw);*/
}


$(window).bind('keydown', function(e){
  if (e.keyCode == 37) $('#book').turn('previous');
  else if (e.keyCode == 39) $('#book').turn('next');
});
