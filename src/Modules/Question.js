import questions from './questions.js';
import Buttons from './Buttons';
const Question = (function(){
  let titleElem;

  function init(){
    cacheDom();
    var page = localStorage.getItem("page");
    Buttons.init(page);
    if(!page)
       page=1;
    loadQuestion(page);
  }

  function cacheDom(){
    titleElem = document.querySelectorAll(".panel-title");
  }

  function loadQuestion(page){
    var k = 0;
    var start = (page-1)*4+1;
    var end = page*4;
    for (var key in questions) {
      key = parseInt(key);
      if(key>=start && key<=end){
        titleElem[k].innerHTML = questions[key].title;

        for(var i=0; i<4; i++){
          var optionElem = titleElem[k].parentNode.parentNode.querySelector('.panel-body').querySelectorAll('.option')[i];
          // var optionElem = titleElem[k].closest('.panel-body').querySelectorAll('.option')[i];
          optionElem.innerHTML = questions[key].answers[i];
        }

        k++;
      }
    }

  }

  return {
    init
  };
})();

export default Question;
