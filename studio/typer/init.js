function randInt(ceiling) {
return Math.floor(Math.random() * ceiling); 
}

var answer = randInt (360); 
console.log(answer); 

$(document).ready(function() {
 var entryCount = 0;2
 var displayCount = 0;

// function randomInt(input){

// 	var rand = Math.random() * input;
// 	rand = parseInt (rand)
// 	return rand;
// }


// function type(event){
// 	console.log(event.key);

// 	var myH1 = document.createElement("h1");
// 	myH1.innerHTML = event.key;
// 	//myH1.style.top = randomInt(500) + "%";
// 	//myH1.style.left = randomInt(500) + "%";
// 	myH1.style.top = randomInt(window.innerHeight) + "px";
// 	myH1.style.left = randomInt(window.innerWidth) + "px";
// 	document.body.appendChild(myH1);
// }

// 	document.onkeypress = type;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

function deleteElement() {
	$(".inner").last().remove();
}
  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function createElement(k) {
  var elem = $('#cursor');

  if (k == "a" || k == "A") { 
  	elem.before('<span class="inner"><video width="320" height="240" autoplay><source src="a.mp4" type="video/mp4"></video></span>');
  }
  if (k == "b" || k == "B") { 
  	elem.before('<span class="inner"><img class="blue" src="blue.jpg"></span>'); 
  	document.body.style.backgroundColor = '#96CBE0';
  }
  if (k == "c" || k == "C") {
  	elem.before('<span class="inner"><img class="calm" source src="calm.png" </span>');
  }
  if (k == "d" || k == "D") { 
  	elem.before('<span class="inner"><img class="steps" src="steps.jpg"></span>'); 
  }
  if (k == "e" || k == "E") { 
  	elem.before('<span class="inner"><video width="320" height="240" autoplay><source src="e.mp4" type="video/mp4"></video></span>');
  }
  if (k == "f" || k == "F") { 
  	elem.before('<span class="inner"><img class="floral" source src="floral.jpg"></span>'); 
  }
  if (k == "g" || k == "G") { 
  	elem.before('<span class="inner"><img class="green" source src="green.jpg"></span>'); 
  	elem.before('<span class="inner"><img src="green2.jpg')
  }
  if (k == "h" || k == "H") { 
  	elem.before('<span class="inner"><img class="home" source src="home.jpg"></span>'); 
  }
  if (k == "i" || k == "I") { 
  	elem.before('<span class="inner"><img class="i" source src="i.jpg" </span>'); 
 }
  if (k == "j" || k == "J") { 
  	elem.before('<span class="inner"><img class="j" source src = "j.jpg"></span>'); }
  if (k == "k" || k == "K")
   { elem.before('<span class="inner"><img class="k" source src = "k.jpg"></span>'); }
  if (k == "l" || k == "L") { 
  	elem.before('<span class="inner"><img class="lovely" source src="lovely.jpg"></span>');
  }
  if (k == "m" || k == "M") { 
  	elem.before('<span class="inner"><img class="martinique" source src="martinique.png"></span>');
  	// document.body.style.fontFamily = 'helvetica'; 
  	// document.body.style.color = '#ffffff'
  	// document.getElementById('immersive').style.left='0px';
  	// document.getElementById('immersive').style.textAlign='unset';  
  	// document.body.style.fontSize="30px";
  }
  if (k == "n" || k == "N") { 
  	elem.before('<span class="inner"><img class="green2" source src="green2.jpg"</span>');
  }
  if (k == "o" || k == "O") {
   elem.before('<span class="inner"></span>');
   document.getElementById('audio').play();
    }
  if (k == "p" || k == "P") {
   elem.before('<span class="inner"><img class="pink" src = "pink.jpg"</span>');
  }
  if (k == "q" || k == "Q") { 
  	elem.before('<span class="inner"><img class="quiet" source src="quiet.jpg"</span>');
  }
  if (k == "r" || k == "R") { 
  	elem.before('<span class="inner"><img class="red" src="roses.jpg"</span>');
  }
  if (k == "s" || k == "S") {
  	var randomTop = Math.floor(Math.random()*800);
  	var randomLeft = Math.floor(Math.random()*800);
  	var theVideo = document.querySelector("#the-video");
  	if(theVideo === null) {
	  	elem.before('<video id="the-video" width="520" height="540" style="top:'+randomTop+'px;left:'+randomLeft+'px" autoplay><source src="sunset.mp4" type="video/mp4"></video></span>');
	} else{
		theVideo.style.top = randomTop + 'px';
		theVideo.style.left = randomLeft + 'px';
	}

  // document.getElementbyId('sunset');
  }
  if (k == "t" || k == "T") { 
	  // var newImage = document.createElement("img");
	  // newImage.src = "trees.jpg"
	  // newImage.style.top = randInt(500) + "px";
  	elem.before('<span class="inner"><img class="trees" src="trees.jpg" style="top:50px'+randInt(500)+'px"></span>');
  }
  if (k == "u" || k == "U") { 
  	elem.before('<span class="inner"><img class="up" src="up.jpg"></span>'); 
  }
  if (k == "v" || k == "V") { 
  	elem.before('<span class="inner"><img class="violet" src="violet.jpg"></span>');
  	}
  if (k == "w" || k == "W") {
   elem.before('<span class="inner"><img class="white" src = "white.jpg"></span>');
  }
  if (k == "x" || k == "X") { 
 	var randomTop = Math.floor(Math.random()*800);
  	var randomLeft = Math.floor(Math.random()*800);
  	var video2 = document.querySelector("#video2");
  	if(video2 === null) {
	  	elem.before('<video id="video-2" width="520" height="540" style="top:'+randomTop+'px;right:'+randomLeft+'px" autoplay><source src="fish.mp4" type="video/mp4"></video></span>');
	} else{
		video.style.top = randomTop + 'px';
		video.style.left = randomLeft + 'px';
	}
  }
  if (k == "y" || k == "Y") {
  	elem.before('<span class="inner"><img class="yellow" src = "yellow.jpg"></span>');  
  }
  if (k == "z" || k == "Z") { 
  	elem.before('<span class="inner"><img class="end" src="end.jpg"</span>');
  }
}
