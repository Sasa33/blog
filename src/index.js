import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import Cartoons from './containers/Cartoons';
import About from './containers/About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/cartoons" component={Cartoons} />
            <Route path="/about" component={About} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
