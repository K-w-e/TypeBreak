let timer, xtimer;
var fonts = [
    "Onda",
    "Times",
    "Impact",
    "Verdana",
  ];

$( document ).ready(function() {
    none();
});

function showAlphabet() {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    document.getElementById("box").style.fontSize = "50vh";
    i=0;
    document.getElementById("box").innerHTML = alphabet[i];
    timer = setInterval(function(){
        if(i<26)
            document.getElementById("box").innerHTML = alphabet[i];
        else 
            i=0;
        i++;
    }, 200);

}

function randomBgColor() {
    var rbg = [
        "#6400ff",
        "#00ffbe",
        "#c6c6c6",
        "#000000",
        "#ffffff"
    ]

    var colorBg = Math.floor((Math.random() * 5));
    var colorTxt = Math.floor((Math.random() * 5));

    while(colorTxt == colorBg)
        colorTxt = Math.floor((Math.random() * 5));

    $("body").css("background-color", rbg[colorBg]);
    $(".box").css("color", rbg[colorTxt]);
}

function none() {
    clearInterval(timer);
    clearInterval(xtimer);
    $("body").css("background-color", "white");
    $(".box").css("color", "black");
    document.getElementById("box").innerHTML = "typebreak";
    document.body.style.backgroundImage = "url('')";
    document.getElementById("box").style.fontFamily = fonts[Math.floor(Math.random() * 3)];
    document.getElementById("box").style.fontSize = "15vw";
}

function impact() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Anton";
    randomBgColor();
}

function times() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Onda";
    randomBgColor();
}

function verdana() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Test";
    randomBgColor();
}

function openAbout() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    console.log(width);
    if(width>768){
        document.getElementById("boxAbout").style.width = "50%";
        document.getElementById("overlay").style.width = (width/2 -50)+"px";
        document.getElementById("overlay").style.height = (height-130)+"px"; 
    }
    else{
        document.getElementById("boxAbout").style.width = "100%";
        document.getElementById("overlay").style.width = (width - 50)+"px";
        document.getElementById("overlay").style.height = (height-130)+"px"; 
    }
}

function closeAbout() {
    document.getElementById("boxAbout").style.width = "0%";
}

function wip() {
    document.getElementById("box").innerHTML = "";
    var imgs = shuffle();
    i=0;
    xtimer = setInterval(function(){  
        document.body.style.backgroundImage = "url('img/"+imgs[i]+"')";
        i++;
        if(i == imgs.length) {
            shuffle();
            i=0;
        }
    }, 1000);
    
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "Fixed";
    //$(body).css("")
}

function shuffle() {
    imgs = ["1.png", "Fontamara_01.jpg", "3.png", "4.png", "next.png"];
    var j, x, i;
    for (i = imgs.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = imgs[i];
        imgs[i] = imgs[j];
        imgs[j] = x;
    }
    console.log(imgs);
    return imgs;
}