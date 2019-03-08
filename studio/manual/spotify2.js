//global variables
var shuffleEl = document.getElementById('shuffle');
var interval = 100;
var intervalBool = true;


//set interval, run shuffle animation
var runAnimation = setInterval(function(){
    shuffle();
}, interval);


function shuffle() {
    //ascii min
    var min = 65;
    //asciimax
    var max = 122; 

    var charArray = [];
    var string = "";


    //get char codes for random string
    for(var i = 0; i < 7; i++) {
        //get random whole number from 32 to 126
        var number = Math.floor(Math.random() * (max - min + 1)) + min;

        //convert char code number to actual letter
        var char = String.fromCharCode(number);
        //add that letter the charArray
        charArray.push(char);
    } 

    //convert chararry to string
    for(var i = 0; i < charArray.length; i ++) {
        var char = charArray[i];
        string = string + char;
    } 
    //change the html of the shuffle el to whatever the string is
    shuffleEl.innerHTML = string;
}

//key down function
document.addEventListener("keydown", function (e) {
    // if leteter is a
    if (e.keyCode == 65) {
        //play sound clips

        //change styles
        document.body.style.backgroundColor = "#84bd00";
        document.body.style.color = "white";
        //fontFamily, fontSize, width of a div, get the p tag and change all paragraphs to a color 

        shuffleEl.style.color = "yellow";



        //end animation
        stopAnimation();

    } else if(e.keyCode == 66) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('audio').play();


        if(intervalBool == false) {
            runAnimation = setInterval(function(){
                shuffle();
            }, interval);
        }
    } else if(e.keyCode=67) {
        document.body.style.backgroundColor = "pink";
        document.body.style.color="blue";
    }
});

function stopAnimation() {
    clearInterval(runAnimation);
    shuffleEl.innerHTML = "SHUFFLE";
    intervalBool = false;
}

