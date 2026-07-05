// add class
$("input").click(function() {
    $("footer").toggleClass("fcolor");
    $("body").toggleClass("black");
});

//keypress
$(document).on("keydown", function (event) {
    console.log(event.key);
    $("h2").text(event.key);
})