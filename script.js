const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

//Move hour arm when minute arm has made 1 full rotation
let hrPosition = (hr*360/12)+(min*(360/60)/12);
//Move minute arm when second arm has made 1 full rotation
let minPosition = (min*360/60)+(sec*(360/60)/60);
//Move second arm on correct rotation angle in a 60 second limit
let secPosition = sec*360/60;

function runTheClock(){
  //Moves 1 hour over 3600 seconds
  hrPosition = hrPosition + (3/360);
  //Moves 1 minute, over 60 seconds
  minPosition = minPosition + (6/60);
  //Every second is 6 degrees
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition +  "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition +  "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition +  "deg)";
}

//Run the clock every 1000 milliseconds
var interval = setInterval(runTheClock, 1000);
