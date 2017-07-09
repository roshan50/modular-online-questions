import answers from './answers.js';

const Buttons = (function(){

  let nextBtn,endBtn,optionPanelElem,page;

  function init(p){
      page = p;
      cacheDom();
      if(page == 5)
        nextBtn.style.visibility = 'hidden';
      else
        addEventListener(nextBtn,nextPage);
      addEventListener(endBtn,resultPage);
  }

  function cacheDom(){
      nextBtn = document.querySelector(".btnNext");
      endBtn = document.querySelector(".btnEnd");
      optionPanelElem = document.querySelectorAll(".panel-body");
  }

  function nextPage(){
    if(page == null){
      page = 2;
    }else if(page == 2 || page == 3 || page == 4){
      page++;
    }
    localStorage.setItem("page",page);
    saveAnswers(page);
    window.location = '/questions.html';
  }

  function resultPage(){
    var page = localStorage.getItem("page");
    saveAnswers(page);
    localStorage.removeItem('page');
  }

  function saveAnswers(page){
    var k = 0;
    var start = (page-1)*4+1;
    var end = page*4;
    for (var key in answers) {
      key = parseInt(key);
      if(key>=start && key<=end){
        var ans = optionPanelElem[k].querySelector('input[type="radio"]:checked').value;
        alert(ans);
        alert(answers[key].ans);
        answers[key].ans = ans;

        k++;
      }
    }
  }

  function addEventListener(btn,btnFunc){
     btn.addEventListener("click", btnFunc);
  }

  return {
    init
  };
})();

export default Buttons;
