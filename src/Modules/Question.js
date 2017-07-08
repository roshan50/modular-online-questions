import questions from './questions.js';
// import Buttons from './Buttons';

const Question = (function(){
  let panel;
  let title;
  function init(){
    // cacheDom();
  }

  function cacheDom(){
    panel = document.querySelector(".panel");
    title = document.querySelector(".panel-title");
  }

  function loadQuestion(page){
    cacheDom();
    var i;
    var start = (page-1)*4+1;
    var end = page*4;
    for (var key in questions) {
      key = parseInt(key);
      if(key>=start && key<=end){
        alert(questions[key].title);
        alert(title[0].innerHTML);
        for(i=1; i<5; i++){
          // alert(questions[key].answers[i]);
        }
      }
    }

  }

  return {
    init,
    loadQuestion
  };
})();

export default Question;
