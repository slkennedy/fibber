import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


let data = {
    "fibs": [ {
        "fib": "Tomatoes are actually a fruit.",
        "author": "silly people"
    },
    {
        "fib": "The word gerkin stems from the German word meaning kin to giants.",
        "author": "American grammaticist"
    },
    {
        "fib": "The March 2016 Scientific News issue reported that scientists have proven that money can grow on trees.",
        "author": "Imes Right, MD. "
    },
    {
        "fib": "Certain species of fish can communicate through eco-location, just as the dolphins do.",
        "author": "SeaWorld"
    },
    {
        "fib": "The answer to the age old question of \"How much wood would a woodchuck chuck, if a woodchuck could chuck wood?\" is 7.",
        "author": "Senior woodchuck chucker at Wood, inc."
    },

    {
        "fib": "Blowing your nose too hard can cause temporary blindess.",
        "author": "Gene McGeyser"
    },

    {
        "fib": ""
    }

    ]
}