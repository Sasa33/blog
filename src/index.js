import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Cartoons, About } from './pages';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cartoons" component={Cartoons} />
                <Route path="/about" component={About} />
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));

if(module.hot) {
    module.hot.accept()
}

registerServiceWorker();
