import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import fibs from './fibs';


ReactDOM.render(<App fibs={fibs} />, document.getElementById('root'));
registerServiceWorker();