var gamePattern = [];
var userClickPattern = [];

var buttonColors = ["red","blue","green","yellow"];

var level = 0 ;

var started = false;


// Function that generates,stores and animates next tile

function nextSequence() { 

    //Increment level and change the displayed level
    level ++;
    $('h1').text("Level " + level);

    //Determine next tile and add to game pattern
    var randomNumber =  Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    
    //Animate generated tile
    $('#' + randomChosenColor).fadeOut(200).fadeIn(200);
    playSound(randomChosenColor)

    
    }


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    }

// Function to animate user chosen tiles 
function animatePress(currentColor){

    $('.' + currentColor).addClass('pressed');
    setTimeout(function(){
        $('.' + currentColor).removeClass('pressed');
    },100);


}


// Function to handle wrong answers and reset user choice pattern at the end of level

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] != userClickPattern[currentLevel]) {

        playSound("wrong")

        $('body').addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over");
        }, 200);


        $('#level-title').text("Game Over, Press Any Key to Restart")

        startOver()

    }

    if (currentLevel === gamePattern.length-1){

        setTimeout(nextSequence,1000);

        userClickPattern = [];
    }

}


function startOver() {

    level = 0;
    gamePattern = [];
    started = false;
}


/////////////////////////////////////////////////

// Start of Game

$(document).on('keypress',function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true;
        
    }  
});



// Game 
$(".btn").click(function(){
    var userChosenColor = $(this).attr('id');
    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer((userClickPattern.length -1));
});


