console.log("hello");

let a = document.querySelectorAll(".drum");
for (var i = 0; i < a.length; i++) {
  let b = document
    .querySelectorAll(".drum")
    [i].addEventListener("click", handleclick);

  // console.log(b)
}

function handleclick() {
  let a = document.querySelector(".drum").innerHTML;
//   console.log(this.innerHTML);
makesound(this.innerHTML)
switch (this.innerHTML) {
    case "A":
      let audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "S":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "D":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "F":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "J":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "K":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "L":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }

  // here this function is same as "a"
  // means this line let a = document.querySelector(".drum").innerHTML output is same to the this function . use this function instead of document.querySelector(".drum").innerHTML
  // console.log(a)

  // if(this.innerHTML == "w"){
  //     src = "sounds/kick-bass.mp3"
  //     let audio = new Audio(src)
  //     audio.play()
  // }

  // or using switch cases


}

document.addEventListener("keypress",function(event){
    console.log(event.key)
    makesound(event.key)
})

function makesound(key){
    switch (key) {
        case "a":
          let audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "f":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "k":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "l":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        default:
          break;
      }
}