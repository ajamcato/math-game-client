let playing = false;
let score;
let action;
let timeremaining;

// if we click on start/reset button
  document.getElementById('startreset').onclick =
  function () {
  //if we are playing
  if(playing == true) {
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

          //yes -> continue
          //no>-> gameover
      // change button to Reset
      // generate new Q&A

// if we click on answer box
  //if we are playing
    //correct?
      //yes
        //increase score
        //show correct box for 1sec
        //generate Q&A
      //if answer is wrong, show try again box

      //functions

      //start counter
      function startCountdown () {
        action = setInterval (function(){
          timeremaining -= 1;

          document.getElementById('timeremainingvalue').innerHTML = timeremaining;
          if(timeremaining == 0) { // game over
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

      function stopCountdown () {
        clearInterval(action);
      }

      //hide element
      function hide (Id) {
        document.getElementById(Id).style.display = 'none';
      }

      // show an element
      function show (Id) {
        document.getElementById(Id).style.display = 'block';
      }

      //generate question and multiple answers
      function generateQA () {

      }
