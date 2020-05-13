showAlphabet();

function showAlphabet() {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    i=0;
    setInterval(function(){
        if(i<26)
            document.getElementById("box").innerHTML = alphabet[i];
        else 
            i=0;
        i++;
    }, 200);
}

function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    $("body").css("background-color", bgColor);
}

function none() {
    document.getElementById("box").style.fontFamily = "";
}

function impact() {
    document.getElementById("box").style.fontFamily = "Impact";
    randomBgColor();
}

function times() {
    document.getElementById("box").style.fontFamily = "Times New Roman";
    randomBgColor();
}

function openAbout() {
    document.getElementById("boxAbout").style.width = "50%";
}

function closeAbout() {
    document.getElementById("boxAbout").style.width = "0%";
}

