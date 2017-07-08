import Question from './Question';
// import questions from './questions.js';


const Buttons = (function(){

  let startBtn,nextBtn,endBtn;

  function init(){
    cacheDom();
    addEventListener(startBtn,start);
  }

  function cacheDom(){
    startBtn = document.querySelector(".btnStart");
    // nextBtn = document.querySelector(".btnNext");
    // endBtn = document.querySelector(".btnEnd");
  }

  function start(){
    window.location.href = "questions.html";alert(1);
    cacheDom();alert(2);
    Question.loadQuestion(1);alert(3);
  }

  function next(page){

  }

  function end(){

  }

  function addEventListener(btn,btnFunc){
     btn.addEventListener("click", btnFunc);
  }

  return {
    init
  };
})();

export default Buttons;
