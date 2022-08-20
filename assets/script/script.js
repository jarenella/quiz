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




nextButtonBegin.addEventListener("click", function() {
    beginBox.setAttribute("class", "hidden");
    box1.setAttribute("class", "displayed");
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
    //for loop looks at every checkbox on the quiz. if it's checked, then it's value is added to the array userAnswers
    for (i=0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var ans = checkBoxes[i].value;
            userAnswers.push(ans);
        }
    }
    //checks if the answer is correct for each question. if so, appropriate points are added
    if (userAnswers[0] == 'boba') {
        userScore = userScore +25
    }
    if (userAnswers[1] == '^-^') {
        userScore = userScore +25
    }
    if (userAnswers[2] == 'gnomes') {
        userScore = userScore +25
    }
    if (userAnswers[3] == 'raccoon') {
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

showHiScoreBttn1.addEventListener("click", function() {
    boxes[0, 1, 2, 3 , 4, 5].setAttribute("class", "hidden");
    highScoresBox.setAttribute("class", "displayed");
})

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