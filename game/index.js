let requestURL = "./questions.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
let questions;

let fiftyFiftyIcon = document.querySelector(".fiffif");
let callToFriendIcon = document.querySelector(".call");
let answersArr = document.querySelectorAll(".spanAnswer");
let i = 0;

request.onload = function () {
  questions = request.response;
  let questionsArr = Object.entries(questions);
  let questionSpan = document.getElementById("question");
  let spanA = document.querySelector(".a");
  let spanB = document.querySelector(".b");
  let spanC = document.querySelector(".c");
  let spanD = document.querySelector(".d");
  changeAnswers(spanA);
  changeAnswers(spanB);
  changeAnswers(spanC);
  changeAnswers(spanD);

  fiftyFifty(questionsArr);
  callToFriend();
  function changeAnswers(span) {
    span.addEventListener("click", () => {
      answersArr.forEach((span) => {
        if (span.classList.contains("hidden")) {
          span.classList.remove("hidden");
        }
        if (span.classList.contains("recomended")) {
          span.classList.remove("recomended");
        }
      });
      let res = JSON.parse(JSON.stringify(questionsArr[i][1]));
      if (parseInt(span.classList[1]) === res.correct) {
        setTimeout(() => {
          i = addPriz(i, span);
        }, 1000);
        updateQuestionAndAnswerInfo();
      } else {
        i = 0;
        if (fiftyFiftyIcon.classList.contains("hidden")) {
          fiftyFiftyIcon.classList.remove("hidden");
        }
        if (callToFriendIcon.classList.contains("hidden")) {
          callToFriendIcon.classList.remove("hidden");
        }
        setTimeout(() => {
          span.classList.add("false");
          removeWin();
        }, 1000);
        updateQuestionAndAnswerInfo();
      }
    });

    function updateQuestionAndAnswerInfo() {
      setTimeout(() => {
        res = JSON.parse(JSON.stringify(questionsArr[i][1]));
        questionSpan.textContent = res.question;
        spanA.textContent = res.content[0];
        spanB.textContent = res.content[1];
        spanC.textContent = res.content[2];
        spanD.textContent = res.content[3];
        span.classList.remove("true", "false");
      }, 3000);
    }
  }
};

function addPriz(i, span) {
  span.classList.add("true");
  let classPriz = ".a" + i;
  if (i > 0) {
    let count = i - 1;
    let prizeEl = document.querySelector(".a" + count);
    prizeEl.classList.remove("win");
  }
  i++;

  let answerBlock = document.querySelector(".answer");
  answerBlock.classList.remove(answerBlock.classList[1]);
  answerBlock.classList.add(i);

  let prizesWin = document.querySelector(classPriz);
  prizesWin.classList.add("win");

  return i;
}

function removeWin() {
  let prizeWin = document.querySelector(".win");
  prizeWin.classList.remove("win");
}

function fiftyFifty(questionsArr) {
  fiftyFiftyIcon.addEventListener("click", () => {
    let answerBlock = document.querySelector(".answer");
    let questionIndex = parseInt(answerBlock.classList[1]);
    let res = JSON.parse(JSON.stringify(questionsArr[questionIndex][1]));
    let hiddenCount = 0;
    answersArr.forEach((answerSpan) => {
      if (
        parseInt(answerSpan.classList[1]) !== res.correct &&
        hiddenCount < 2
      ) {
        answerSpan.classList.add("hidden");
        fiftyFiftyIcon.classList.add("hidden");
        hiddenCount++;
      }
    });
  });
}

function callToFriend() {
  callToFriendIcon.addEventListener("click", () => {
    let randomAnswer = Math.floor(Math.random() * (4 - 0) + 0);
    console.log(randomAnswer);
    answersArr.forEach((answerSpan) => {
      if (parseInt(answerSpan.classList[1]) === randomAnswer) {
        answerSpan.classList.add("recomended");
        callToFriendIcon.classList.add("hidden");
      }
    });
  });
}
