
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handle);
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key)
});


function handle() {
    var buttonInner = this.innerHTML;
    makesound(buttonInner);
    buttonAnimation(buttonInner);
    switch (buttonInner) {
        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.loop = false;
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('sounds/uu.mp3');
            audio2.loop = false;
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio('sounds/uuu.mp3');
            audio3.loop = false;
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio('sounds/tom-1.mp3');
            audio4.loop = false;
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio('sounds/tom-2.mp3');
            audio5.loop = false;
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio('sounds/tom-3.mp3');
            audio6.loop = false;
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio('sounds/tom-4.mp3');
            audio7.loop = false;
            audio7.play();
            break;



        default:
            break;
    }
}
function makesound(key) {

    switch (key) {
        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.loop = false;
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('sounds/uu.mp3');
            audio2.loop = false;
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio('sounds/uuu.mp3');
            audio3.loop = false;
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio('sounds/tom-1.mp3');
            audio4.loop = false;
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio('sounds/tom-2.mp3');
            audio5.loop = false;
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio('sounds/tom-3.mp3');
            audio6.loop = false;
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio('sounds/tom-4.mp3');
            audio7.loop = false;
            audio7.play();
            break;



        default:
            break;
    }

}
function buttonAnimation(current_key) {
    var activebutton = document.querySelector("." + current_key);
            activebutton.classList.add("pressed");

    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100)
}

