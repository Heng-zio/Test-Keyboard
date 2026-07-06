// add class
$("input").click(function () {
  $("footer").toggleClass("fcolor");
  $("body").toggleClass("black");
  const audio = new Audio("./SwitchSound.mp3");
  audio.play();
});

//keypress
$(document).on("keydown", function (event) {
  console.log(event.key);
  $("h2").text(event.key);
  const audio = new Audio("./BlueSwitch.MP3");
  audio.play();
});
