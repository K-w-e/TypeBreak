let timer;
var fonts = [
    "Arial",
    "Times",
    "Impact",
    "Verdana",
  ];

$( document ).ready(function() {
    none();
});

function showAlphabet() {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    document.getElementById("box").style.fontSize = "50vw";
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
        "#ff0000",
        "#b9c000",
        "#547ff4",
    ]

    var colorBg = Math.floor((Math.random() * 3));
    var colorTxt = Math.floor((Math.random() * 3));

    while(colorTxt == colorBg)
        colorTxt = Math.floor((Math.random() * 3));

    $("body").css("background-color", rbg[colorBg]);
    $(".box").css("color", rbg[colorTxt]);
}

function none() {
    clearInterval(timer);
    $("body").css("background-color", "white");
    $(".box").css("color", "black");
   /* setInterval(function(){
        x = Math.floor((Math.random() * 4) + 1);
        document.getElementById("box").style.fontFamily = fonts[x];
    }, 200);*/
    document.getElementById("box").innerHTML = "typebreak";
    document.getElementById("box").style.fontFamily = "";
    document.getElementById("box").style.fontSize = "19vw";
}

function impact() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Anton";
    randomBgColor();
}

function times() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Allianz";
    randomBgColor();
}

function verdana() {
    showAlphabet();
    document.getElementById("box").style.fontFamily = "Onda";
    randomBgColor();
}

function openAbout() {
    document.getElementById("boxAbout").style.width = "50%";
}

function closeAbout() {
    document.getElementById("boxAbout").style.width = "0%";
}

function show5x5() {
    document.getElementById("show5x5").style.display = "block";
}

function hide5x5() {
    document.getElementById("show5x5").style.display = "none";
}

