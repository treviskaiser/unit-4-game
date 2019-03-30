var score = 0;
var scoreToWin = Math.floor(Math.random() * (120 - 19)) + 19;
var win = 0;
var lose = 0;
var gemValue = {
    "blue": Math.floor(Math.random() * (12)) + 1,
    "green": Math.floor(Math.random() * (12)) + 1,
    "purple": Math.floor(Math.random() * (12)) + 1,
    "red": Math.floor(Math.random() * (12)) + 1,
    
}

function updateScore() {
    $("#score").text("Score: " + score);
    $("#win").text("Win: " + win);
    $("#lose").text("Lose: " + lose);
    $("#numberToWin").text("Score to Win: " + scoreToWin);

    if (score === scoreToWin) {
        alert("You Win");
        score = 0;
        scoreToWin = Math.floor(Math.random() * (120 - 19)) + 19;
        win++;
        updateScore();
        resetGemValue();
    }
    else if (score > scoreToWin) {
        alert("You Lose");
        score = 0;
        scoreToWin = Math.floor(Math.random() * (120 - 19)) + 19;
        lose++;
        updateScore();
        resetGemValue();
    }
}

function resetGemValue() {
    gemValue = {
        "blue": Math.floor(Math.random() * (12)) + 1,
        "green": Math.floor(Math.random() * (12)) + 1,
        "purple": Math.floor(Math.random() * (12)) + 1,
        "red": Math.floor(Math.random() * (12)) + 1,
        
    }
}


    $("#blue").on("click", function () {
            score += gemValue.blue;
            updateScore();
    });

    $("#green").on("click", function () {
        score += gemValue.green;
        updateScore();
    });

    $("#red").on("click", function () {
        score += gemValue.red;
        updateScore();
    });

    $("#purple").on("click", function () {
        score += gemValue.purple;
        updateScore();
    });


updateScore();



