import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
