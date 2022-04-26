// Function that checks uses a key character to play the corresponding sound
function makeSound(currentKey) {


    switch(currentKey){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            alert("Key Pressed");
    }
}


// Add event listeners for button clicks 
var buttonArray = document.querySelectorAll(".drum")

for (i=0;i<buttonArray.length;i++) {

   
    buttonArray[i].addEventListener("click",function(){

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    
}

// Add event listeneres for key pressed 
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
});


// Add animation

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed")
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    

}