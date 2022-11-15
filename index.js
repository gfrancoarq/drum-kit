//Listener para los clicks

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Listener para las teclas
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});
//Ejecución del sonido:

function makeSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/a1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/a2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("sounds/a3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/a4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("sounds/a5.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("sounds/a6.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("sounds/a7.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);

  activeButton.classList.toggle("pressed");
  setTimeout(() => activeButton.classList.toggle("pressed"), 100);
}
