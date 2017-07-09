import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Question from './Modules/Question';
import Score from './Modules/Score';

var loc = window.location.pathname;
if(loc == '/questions.html'){
  Question.init();
}else if(loc == '/result.html'){
  Score.init();
}

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
