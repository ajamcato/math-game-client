let playing = false;
let score;
let action;
let timeremaining
let correctAnswer;

// if we click on start/reset button
document.getElementById('startreset').onclick =
  function() {
    //if we are playing
    if (playing == true) {
      location.reload(); //reload page
    } else { //if we are not playing, set score to 0
      //change mode to playing
      playing = true;
      //set score to 0
      score = 0;

      document.getElementById('scorevalue').innerHTML = score;

      document.getElementById('timeremaining').style.display = 'block';

      //show countdown box
      show('timeremaining');
      timeremaining = 60;

      document.getElementById('timeremainingvalue').innerHTML = timeremaining;

      //change button to reset
      document.getElementById('startreset').innerHTML = 'Reset Game';

      // start countdown
      startCountdown();

      //generate a new Q&A

      generateQA();
    }


  }

// clicking on an answer box

document.getElementById('box1').onclick =
function () {
  //check is we are playing
  if (playing == true) {//yes
    if (this.innerHTML == correctAnswer) {
      //correct answer

      //increase score by 1
      score++;

      document.getElementById('scorevalue').innerHTML = score;

          //hide wrong box and show correct box

          hide('wrong');
          show('correct');
          setTimeout(function(){
            hide('correct');
          }, 1000);

          //Generate new QA
          generateQA();
    } else {
      //wrong answer
      hide('correct');
      show('wrong');
      setTimeout(function () {
        hide('wrong');
      }, 1000);

    }
  }
}

for (i=1; i<5; i++) {
  document.getElementById('box' + i).onclick =
  function () {
    //check is we are playing
    if (playing == true) {//yes
      if (this.innerHTML == correctAnswer) {
        //correct answer

        //increase score by 1
        score++;

        document.getElementById('scorevalue').innerHTML = score;

            //hide wrong box and show correct box

            hide('wrong');
            show('correct');
            setTimeout(function(){
              hide('correct');
            }, 1000);

            //Generate new QA
            generateQA();
      } else {
        //wrong answer
        hide('correct');
        show('wrong');
        setTimeout(function () {
          hide('wrong');
        }, 1000);

      }
    }
  }
}

//functions

//start counter
function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;

    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    if (timeremaining == 0) { // game over
      stopCountdown();
      show('gameover');

      document.getElementById('gameover').innerHTML =
        "<p>Game Over!</p><p>Your score is " + score + ". </p>"

      hide('timeremaining');
      hide('correct');
      hide('wrong');
      playing = false;

    }
  }, 1000);
}

//stop counter

function stopCountdown() {
  clearInterval(action);
}

//hide element
function hide(Id) {
  document.getElementById(Id).style.display = 'none';
}

// show an element
function show(Id) {
  document.getElementById(Id).style.display = 'block';
}

//generate question and multiple answers
function generateQA() {
  let x = 1 + Math.round(9 * Math.random());
  let y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;

  document.getElementById('question').innerHTML = x + 'x' + y;
  let correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById('box' + correctPosition).innerHTML = correctAnswer; //fill one box with correct answer

  //fill other boxes with wrong answers

  let answers = [correctAnswer];

  for (i = 1; i < 5; i++) {
    if (i !== correctPosition) {
      let wrongAnswer;
      do {

          wrongAnswer = (1 + Math.round(9 * Math.random())) *
            (1 + Math.round(9 * Math.random())); // a wrong answer
        } while (answers.indexOf(wrongAnswer)>-1)

        document.getElementById('box' + i).innerHTML = wrongAnswer;
          answers.push(wrongAnswer);
      }

    }
  }
