'use strict';

let icon = document.getElementById("icon");
let mySong = document.getElementById("mySong");

icon.onclick = function(){
  if (mySong.paused) {
    mySong.play();
    icon.src = "./images/pause.png";
  } else {
    mySong.pause();
    icon.src = "./images/play.png";
  }

};