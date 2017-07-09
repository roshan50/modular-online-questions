import questions from './questions.js';
import answers from './answers.js';

const Score = (function(){
  let tableRows,scoreElem;
  function init(){
    cacheDom();
    loadResults();
  }

  function cacheDom(){
    tableRows = document.querySelector(".table").querySelectorAll('tr');
    scoreElem = document.querySelector(".score");
  }

  function loadResults(){
    var k = 1;
    var score = 0;
    for (var key in questions) {
      var tds = tableRows[k].querySelectorAll('td');
      tds[1].innerHTML = questions[key].title;
      var correctInx = questions[key].correct-1;
      var ansInx = answers[key].ans-1;

      for(var i=2; i<6; i++){
        tds[i].innerHTML = questions[key].answers[i-2];

        if(correctInx == ansInx){
          if(tds[i].innerHTML == questions[key].answers[correctInx]){
            tds[i].style.backgroundColor = 'lightblue';
          }
        }else{
          if(tds[i].innerHTML == questions[key].answers[correctInx]){
            tds[i].style.backgroundColor = 'green';
          }
          if(tds[i].innerHTML == questions[key].answers[ansInx]){
            tds[i].style.backgroundColor = 'red';
          }
        }
      }

      if(correctInx == ansInx){
        score++;
      }
      
      k++;

    }
    scoreElem.innerHTML = score;
  }

  return {
    init
  };
})();

export default Score;
