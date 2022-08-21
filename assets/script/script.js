//variables
var beginBox = document.getElementById("begin-box");
var box1 = document.getElementById("question1-box");
var box2 = document.getElementById("question2-box");
var box3 = document.getElementById("question3-box");
var box4 = document.getElementById("question4-box");
var finishBox = document.getElementById("finish-box");
var highScoresBox = document.getElementById("high-scores");
var boxes = [beginBox, box1, box2, box3, box4, finishBox, highScoresBox];
var nextButtonBegin = document.getElementById("next-button-begin");
var nextButton1 = document.getElementById("next-button-1");
var nextButton2 = document.getElementById("next-button-2");
var nextButton3 = document.getElementById("next-button-3");
var nextButton4 = document.getElementById("next-button-4");
var nextButtons = document.getElementsByClassName("next-button");
var prevButton2 = document.getElementById("prev-button-2");
var prevButton3 = document.getElementById("prev-button-3");
var prevButton4 = document.getElementById("prev-button-4");
var userAnswers = [];
var checkBoxes = document.getElementsByTagName("input");
var userScore = 0;
var printScore = document.getElementById("score");
var showHiScoreBttn1 = document.getElementById("highscores-button1");
var showHiScoreBttn2 = document.getElementById("highscores-button2");
var timer = document.getElementById("timer");
var submitButton = document.getElementById("submit-button");
var topScore = document.getElementById("top-score");
var score2 = document.getElementById("2nd-place");
var score3 = document.getElementById("3rd-place");
var score4 = document.getElementById("4th-place");

//for loop function that puts all answers on an array called userAnswers
function updateUserAnswers() {
    for (i=0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var ans = checkBoxes[i].value;
            userAnswers.push(ans);
        }
    }
}


//timer function
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
      //if you run out of time, the countdown stops and you're brought to the end screen
      if (timeLeft === 0 || timeLeft < 0) {
        clearInterval(timeInterval);
        beginBox.setAttribute("class", "hidden");
        box1.setAttribute("class", "hidden");
        box2.setAttribute("class", "hidden");
        box3.setAttribute("class", "hidden");
        box4.setAttribute("class", "hidden");
        finishBox.setAttribute("class", "displayed");
        highScoresBox.setAttribute("class", "hidden");
        timer.textContent = "TIME'S UP";
      }
      //if you finish before the countdown reaches zero, the countdown will also stop
      nextButton4.addEventListener("click", function() {
        clearInterval(timeInterval);
      });

      //if you click to view high scores while the timer is active, it deactivates
      showHiScoreBttn1.addEventListener("click", function() {
        clearInterval(timeInterval);
      });

      //when you click the next button on the questions, you lose 15 seconds if it's incorrect
      //if (nextButton1.clicked == true) {
        //updateUserAnswers();
        //if (userAnswers[0] == 'incorrect') {
            //timeLeft = timeLeft - 15
        //}
      //}
      //else if (nextButton2.clicked == true) {
        //updateUserAnswers();
        //if (userAnswers[1] == 'incorrect') {
            //timeLeft = timeLeft -15
        //}
      //}
    



      
      
    }, 1000);
}

//question boxes and buttons and what happens when they are pressed
nextButtonBegin.addEventListener("click", function() {
    beginBox.setAttribute("class", "hidden");
    box1.setAttribute("class", "displayed");
    countdown();
});

nextButton1.addEventListener("click", function() {
    box1.setAttribute("class", "hidden");
    box2.setAttribute("class", "displayed");
});

nextButton2.addEventListener("click", function() {
    box2.setAttribute("class", "hidden");
    box3.setAttribute("class", "displayed");
});
prevButton2.addEventListener("click", function() {
    box2.setAttribute("class", "hidden");
    box1.setAttribute("class", "displayed");
});

nextButton3.addEventListener("click", function() {
    box3.setAttribute("class", "hidden");
    box4.setAttribute("class", "displayed");
});
prevButton3.addEventListener("click", function() {
    box3.setAttribute("class", "hidden");
    box2.setAttribute("class", "displayed");
});

nextButton4.addEventListener("click", function() {
    box4.setAttribute("class", "hidden");


 //BELOW AREA DETERMINES SCORE
    //for loop looks at every checkbox on the quiz. if it's checked, then it's value is added to the array userAnswers. function is defined on line 28
    updateUserAnswers();
    //checks if the answer is correct for each question. if so, appropriate points are added
    if (userAnswers[0] == 'correct') {
        userScore = userScore +25
    }
    if (userAnswers[1] == 'correct') {
        userScore = userScore +25
    }
    if (userAnswers[2] == 'correct') {
        userScore = userScore +25
    }
    if (userAnswers[3] == 'correct') {
        userScore = userScore +25
    }
    //prints the score as text content in html to be displayed
    printScore.textContent = userScore;
 //ABOVE AREA DETERMINES SCORE


    finishBox.setAttribute("class", "displayed");
});
prevButton4.addEventListener("click", function() {
    box4.setAttribute("class", "hidden");
    box3.setAttribute("class", "displayed");
});

//shows the high score box
showHiScoreBttn1.addEventListener("click", function() {
    beginBox.setAttribute("class", "hidden");
    box1.setAttribute("class", "hidden");
    box2.setAttribute("class", "hidden");
    box3.setAttribute("class", "hidden");
    box4.setAttribute("class", "hidden");
    finishBox.setAttribute("class", "hidden");
    highScoresBox.setAttribute("class", "displayed");
})
showHiScoreBttn2.addEventListener("click", function() {
    beginBox.setAttribute("class", "hidden");
    box1.setAttribute("class", "hidden");
    box2.setAttribute("class", "hidden");
    box3.setAttribute("class", "hidden");
    box4.setAttribute("class", "hidden");
    finishBox.setAttribute("class", "hidden");
    highScoresBox.setAttribute("class", "displayed");
})

//saving high scores
submitButton.addEventListener("click", function() {
    var userName = document.getElementById("user-name").value;

    if (userName == "") {
        alert("Please enter a name before submitting your score")
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("userScore", userScore);

    //var user = {
        //name: userName,
        //score: userScore
    //}

    //localStorage.setItem("user", JSON.stringify(user));

});

//rendering high scores
//var userFromLS = localStorage.getItem('user');
//var userFromLsMinusQuotes = userFromLS.replaceAll('"', '');
//var userFromLsMinusBrackets1 = userFromLsMinusQuotes.replaceAll("{", "");
//var userRenderable = userFromLsMinusBrackets1.replaceAll("}", "");
//document.getElementById("top-score").textContent = "1. " + userRenderable;
topScore.textContent = "1. Name: " + localStorage.getItem("userName") + " Score: " + localStorage.getItem("userScore");
if (topScore.textContent.includes(0) && userScore > 0) {
    topScore.textContent = "1. Name: " + localStorage.getItem("userName") + " Score: " + localStorage.getItem("userScore");
}

